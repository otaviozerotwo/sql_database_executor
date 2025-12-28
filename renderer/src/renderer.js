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