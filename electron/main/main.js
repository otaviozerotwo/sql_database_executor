const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');
const { Client } = require('pg');

let mainWindow = null;
let pgClient = null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    roundedCorners: false,
    webPreferences: {
      preload: path.join(__dirname + '/preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });
  
  mainWindow.maximize();
  mainWindow.loadURL('http://localhost:5173');

  // Menu.setApplicationMenu(null);
}

app.whenReady().then(() => {
  createWindow();
});

ipcMain.handle('db:connect', async (_event, config) => {
  const { host, port, database, user, password } = config || {};
  
  if (!host || !port || !database || !user || !password) {
    return {
      success: false,
      message: 'Dados de conexão inválidos'
    };
  }

  try {
    if (pgClient) {
      await pgClient.end().catch(() => {});
      pgClient = null;
    }

    const client = new Client({
      host,
      port,
      database,
      user,
      password,
      connectionTimeoutMillis: 5000
    });

    await client.connect();

    await client.query('SELECT 1');

    pgClient = client;

    return {
      success: true,
      message: 'Conectado com sucesso'
    };

  } catch (error) {
    if (pgClient) {
      await pgClient.end().catch(() => {});
      pgClient = null;
    }

    return {
      success: false,
      message: error.message || 'Erro ao conectar ao banco'
    };
  }
});