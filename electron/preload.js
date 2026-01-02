const { contextBridge, ipcRenderer } = require('electron');
const { executeSqlBatch } = require('./services/sqlExecutor');

contextBridge.exposeInMainWorld('api', {
  /**
   * Solicita conexão com o banco de dados
   * @param {Object} config
   * @returns {Promise<{ success: boolean, message?: string }>}
   */
  connectDatabase: (config) => {
    return ipcRenderer.invoke('db:connect', config);
  },

  disconnectDatabase: () => {
    return ipcRenderer.invoke('db:disconnect');
  },

  selectSqlFiles: () => {
    return ipcRenderer.invoke('files:selectSql');
  },

  executeSqlBatch: (files) => {
    ipcRenderer.invoke('sql:executeBatch', files);
  },

  onSqlLog: (callback) => {
    ipcRenderer.removeAllListeners('sql:log');
    ipcRenderer.on('sql:log', (_event, log) => callback(log));
  }
});