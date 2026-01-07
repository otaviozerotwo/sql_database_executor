import { useEffect, useState } from 'react';
import { 
  connectToDatabase, 
  disconnectToDatabase, 
  selectSqlFiles,
  executeSqlBatch,
  onSqlLog 
} from '../renderer';

export function useAppController() {
  const [dbStatus, setDbStatus] = useState('disconnected');
  const [message, setMessage] = useState('Disconnected');
  const [executionStatus, setExecutionStatus] = useState('idle');
  const [files, setFiles] = useState([]);
  
  const isConnected = dbStatus === 'connected';

  const canUpload = dbStatus === 'connected';
  const canExecute =
    dbStatus === 'connected' &&
    files.length > 0 &&
    executionStatus !== 'running';

  const canStop = executionStatus === 'running';

  useEffect(() => {
    onSqlLog(log => {
      setFiles(prev => 
        prev.map(file =>
          file.path === log.filePath
            ? {
                ...file,
                logs: [
                  ...(file.logs || []),
                  { status: log.status, message: log.message }
                ]
              }
            : file
        )
      );

      if (log.status === 'success') {
        setTimeout(() => {
          setFiles(prev =>
            prev.filter(file => file.path !== log.filePath)
          );
        }, 300);
      }
    });
  }, []);

  async function connect(form) {
    setDbStatus('connecting');

    const result = await connectToDatabase(form);

    if (result.success) {
      setDbStatus('connected');
      setMessage(`Connected to ${form.database} at ${form.host}:${form.port}`);
      return true;
    }

    setDbStatus('error');
    setMessage(`Connection failed: ${result.message}`);
    return false;
  }

  async function disconnect() {
    setDbStatus('disconnecting');
    await disconnectToDatabase();

    setDbStatus('disconnected');
    setMessage('Disconnected');
    setFiles([]);
  }

  async function uploadFiles() {
    const selectedFiles = await selectSqlFiles();

    if (!selectedFiles || selectedFiles.length === 0) {
      return;
    }

    setFiles(prev => {
      const existing = new Set(prev.map(f => f.path));
      const filtered = selectedFiles.filter(f => !existing.has(f.path));
      return [...prev, ...filtered];
    });
  }

  function removeFile(path) {
    setFiles(prev => prev.filter(f => f.path !== path));
  }

  function startExecution() {
    setExecutionStatus('running');
  }

  function finishExecution() {
    setExecutionStatus('idle');
  }

  function stopExecution() {
    setExecutionStatus('idle');
  }

  async function executeAll() {
    setExecutionStatus('running');
    
    try {
      await executeSqlBatch(files);

    } finally {
      setExecutionStatus('idle');
    }
  }

  return {
    dbStatus,
    message,
    executionStatus,
    files,

    isConnected,
    canUpload,
    canExecute,
    canStop,

    connect,
    disconnect,
    uploadFiles,
    removeFile,
    startExecution,
    finishExecution,
    stopExecution,
    executeAll
  };
}