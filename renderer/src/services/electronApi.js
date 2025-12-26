const electronApi = {
  /**
   * Solicita conexão com o banco de dados
   * @param {Object} config
   * @param {string} config.host
   * @param {number} config.port
   * @param {string} config.database
   * @param {string} config.user
   * @param {string} config.password
   * @returns {Promise<{ success: boolean, message?: string }>}
   */

  connectDatabase(config) {
    if (!window.api || typeof window.api.connectDatabase !== 'function') {
      return Promise.reject(
        new Error('Electron API não está disponível')
      );
    }

    return window.api.connectDatabase(config);
  }
};

export default electronApi;