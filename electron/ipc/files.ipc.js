// IPC -> fala com o renderer

// handlers IPC de arquivos

const { ipcMain, dialog } = require('electron');
const path = require('path');

function registerFilesIpc(mainWindow) {
  ipcMain.handle('files:selectSql', async () => {
    const result = await dialog.showOpenDialog(mainWindow, {
      title: 'Select SQL files',
      properties: ['openFile', 'multiSelections'],
      filters: [
        { name: 'SQL files', extensions: ['sql'] }
      ]
    });

    if (result.canceled) {
      return [];
    }

    return result.filePaths.map(filePath => ({
      name: path.basename(filePath),
      path: filePath
    }));
  });
}

module.exports = {
  registerFilesIpc
};