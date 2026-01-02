const { readSqlFile } = require('./fileReader');
const db = require('../db/connection');

/**
 * Executa uma lista de arquivos SQL de forma sequencial.
 * Interrompe a execução no primeiro erro.
 * 
 * @param {Object} params
 * @param {Array<{ name: string, path: string }>} params.files
 * @param {(log: Object) => void} params.onLog
 */

async function executeSqlBatch({ files = [], onLog }) {
  if (!Array.isArray(files) || files.length === 0) {
    throw new Error('Nenhum arquivo SQL informado para execução');
  }

  const client = db.getClient();

  if (!client) {
    throw new Error('Nenhuma conexão ativa com o banco de dados');
  }

  for (const file of files) {
    const { name, path } = file;

    try {
      // lê o arquivo
      const { content } = await readSqlFile(path);

      // executa o script no banco
      await client.query(content);

      // log de sucesso
      if (onLog) {
        onLog({
          file: name,
          status: 'success',
          message: 'Script executed successfully'
        });
      }
    } catch (error) {
      // log de erro (e interrupção)
      if (onLog) {
        onLog({
          file: name,
          status: 'error',
          message: error.message || 'Erro ao executar script SQL'
        });
      }
      
      return {
        success: false,
        error: error.message,
        failedFile: name
      };
    }
  }

  // execução concluída com sucesso
  return {
    success: true
  };
}

module.exports = {
  executeSqlBatch
};