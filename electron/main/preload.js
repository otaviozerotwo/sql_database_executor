const { contextBridge, ipcRenderer } = require('electron');

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
  }
});