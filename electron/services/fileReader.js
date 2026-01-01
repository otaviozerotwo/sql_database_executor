const fs = require('fs/promises');
const path = require('path');

/**
 * Lê um arquivo .sql e retorna seu conteúdo como string
 * @param {string} filePath - Caminho absoluto do arquivo
 */

async function readSqlFile(filePath) {
  if (!filePath || typeof filePath !== 'string') {
    throw new Error('Caminho do arquivo inválido');
  }

  const ext = path.extname(filePath).toLowerCase();

  if (ext !== '.sql') {
    throw new Error(`Arquivo inválido (${ext}). Apenas arquivos .sql são permitidos`);
  }

  let content;

  try {
    content = await fs.readFile(filePath, {
      encoding: 'utf-8'
    });
  } catch (error) {
    throw new Error(`Erro ao ler o arquivo: ${error.message}`);
  }

  if (!content || !content.trim()) {
    throw new Error('Arquivo SQL está vazio');
  }

  return {
    path: filePath,
    name: path.basename(filePath),
    content
  };
}

/**
 * Lê múltiplos arquivos .sql em sequência
 * @param {string} files
 */

async function readMultipleSqlFiles(files = []) {
  if (!Array.isArray(files) || files.length === 0) {
    throw new Error('Nenhum arquivo informado para leitura');
  }

  const results = [];

  for (const filePath of files) {
    const sqlFile = await readSqlFile(filePath);
    results.push(sqlFile);
  }

  return results;
}

module.exports = {
  readSqlFile,
  readMultipleSqlFiles
};