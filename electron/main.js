const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const { registerDbIpc } = require('./ipc/db.ipc');

let mainWindow = null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    roundedCorners: false,
    webPreferences: {
      preload: path.join(__dirname, '/preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });
  
  mainWindow.maximize();
  mainWindow.loadURL('http://localhost:5173');

  Menu.setApplicationMenu(null);
}

app.whenReady().then(() => {
  createWindow();

  registerDbIpc();
});