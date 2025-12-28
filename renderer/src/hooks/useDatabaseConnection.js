import { useState } from 'react';
import { connectToDatabase, disconnectToDatabase } from '../renderer';

export function useDatabaseConnection() {
  const [status, setStatus] = useState('disconnected');
  const [message, setMessage] = useState('Disconnected');
  const [connectionInfo, setConnectionInfo] = useState(null);

  const isConnected = status === 'connected';

  async function connect(form) {
    setStatus('connecting');

    const result = await connectToDatabase(form);

    if (result.success) {
      setStatus('connected');
      setConnectionInfo(form);
      setMessage(`Connected to ${form.database} at ${form.host}:${form.port}`);
      return true;
    }

    setStatus('disconnected');
    setMessage(`Connection failed: ${result.message}`);
    return false;
  }

  async function disconnect() {
    setStatus('disconnecting');
    await disconnectToDatabase();

    setStatus('disconnected');
    setConnectionInfo(null);
    setMessage('Disconnected');
  }

  return {
    status,
    message,
    isConnected,
    connectionInfo,
    connect,
    disconnect
  };
}