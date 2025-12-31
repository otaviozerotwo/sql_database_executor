// Objetivo:

// * Centralizar o pgClient;
// * Ter uma única fonte de verdade para conexão

const { Client } = require('pg');

let pgClient = null;

async function connect(config) {
  if (pgClient) {
    await pgClient.end().catch(() => {});
    pgClient = null;
  }

  const client = new Client({
    host: config.host,
    port: config.port,
    database: config.database,
    user: config.user,
    password: config.password,
    connectionTimeoutMillis: 5000
  });

  await client.connect();
  await client.query('SELECT 1');

  pgClient = client;
  return pgClient;
}

async function disconnect() {
  if (pgClient) {
    await pgClient.end().catch(() => {});
    pgClient = null;
  }
}

function getClient() {
  return pgClient;
}

module.exports = {
  connect,
  disconnect,
  getClient
};