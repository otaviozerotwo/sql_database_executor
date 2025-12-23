const { app, BrowserWindow, Menu } = require('electron');

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    roundedCorners: false,
    webPreferences: {
      preload: __dirname + '/preload.js'
    }
  });
  
  mainWindow.maximize();
  mainWindow.loadURL('http://localhost:5173');

  // Menu.setApplicationMenu(null);
}

app.whenReady().then(() => {
  createWindow();
});