// IPC -> fala com o renderer

// handlers IPC de banco

// Objetivo:

// * Validar input;
// * Chamar o serviço certo;
// * Retornar respostas simples;

const { ipcMain } = require('electron');
const db = require('../db/connection');

function registerDbIpc() {
  ipcMain.handle('db:connect', async (_event, config) => {
    const { host, port, database, user, password } = config || {};

    if (!host || !port || !database || !user || !password) {
      return {
        success: false,
        message: 'Dados de conexão inválidos'
      };
    }

    try {
      await db.connect(config);
      return {
        success: true,
        message: 'Conectado com sucesso'
      };
    } catch (error) {
      await db.disconnect();
      return {
        success: false,
        message: error.message || 'Erro ao conectar ao banco'
      };
    }
  });

  ipcMain.handle('db:disconnect', async () => {
    await db.disconnect();
    return { success: true };
  });
}

module.exports = {
  registerDbIpc
};