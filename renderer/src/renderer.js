export async function connectToDatabase(formData) {
  if (!window.api || !window.api.connectDatabase) {
    throw new Error('Electron API não disponível');
  }

  const { host, port, database, user, password } = formData;

  if (!host || !port || !database || !user || !password) {
    return {
      success: false,
      message: 'Preencha todos os campos'
    };
  }

  const result = await window.api.connectDatabase({
    host,
    port: Number(port),
    database,
    user,
    password
  });

  return result;
}

export async function disconnectToDatabase() {
  if (!window.api || !window.api.disconnectDatabase) {
    throw new Error('Electron API não disponível');
  }

  const result = await window.api.disconnectDatabase();

  return result;
}

export async function selectSqlFiles() {
  if (!window.api || !window.api.disconnectDatabase) {
    throw new Error('Electron API não disponível');
  }
  
  const result = await window.api.selectSqlFiles();

  return result;
}

export async function executeSqlBatch(files) {
  if (!window.api || !window.api.executeSqlBatch) {
    throw new Error('Electron API não disponível');
  }

  const result = await window.api.executeSqlBatch(files);

  return result;
}

export function onSqlLog(callback) {
  if (!window.api || !window.api.onSqlLog) {
    throw new Error('Electron API não disponível');
  }

  window.api.onSqlLog(callback);
}