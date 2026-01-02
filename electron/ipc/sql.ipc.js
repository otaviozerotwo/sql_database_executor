const { ipcMain, BrowserWindow } = require('electron');
const { executeSqlBatch } = require('../services/sqlExecutor');
const db = require('../db/connection');

/**
 * Registra os handlers IPC relacionados à execução de SQL
 * @param {BrowserWindow} mainWindow
 */

function registerSqlIpc(mainWindow) {
  // Executa lote de scripts SQL
  ipcMain.handle('sql:executeBatch', async (_event, files) => {
    if (!Array.isArray(files) || files.length === 0) {
      return {
        success: false,
        message: 'Nenhum arquivo SQL informado'
      };
    }

    if (!db.getClient()) {
      return {
        success: false,
        message: 'Nenhuma conexão ativa com o banco de dados'
      };
    }

    try {
      const result = await executeSqlBatch({
        files,
        onLog: log => {
          // envia logs em tempo real para o renderer
          mainWindow.webContents.send('sql:log', log);
        }
      });

      return result;
    } catch (error) {
      return {
        success: false,
        message: error.message || 'Erro inesperado na execução SQL'
      };
    }
  });
}

module.exports = {
  registerSqlIpc
};