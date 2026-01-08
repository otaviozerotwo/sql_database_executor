import { FaTerminal } from 'react-icons/fa6';
import './ExecutionLog.css';

export function ExecutionLog({ dbStatus, files }) {
  const hasLogs = files.some(file => file.logs && file.logs.length > 0);

  return (
    <div className='execution-log'>
      <div className='execution-log-header'>
        <h2 className='title'>Execution Log</h2>
      </div>
      {dbStatus !== 'connected' || !hasLogs ? (
        <div className='execution-log-content'>
          <div className='execution-log-content-empty'>
            <FaTerminal size={48} />
            <p>No execution logs yet. Connect to database and upload SQL files to start.</p>
          </div>
        </div>
      ) : (
        <div className='execution-log-list-container'>
          <ul className='execution-log-list'>
            {files.map((file, fileIndex) => (
              <li key={file.path} className='execution-log-item'>
                <strong>
                  {fileIndex + 1} - {file.name}
                </strong>
                {file.logs?.map((log, logIndex) => (
                  <span
                    key={logIndex}
                    className={`execution-log-message ${log.status}`}
                  >
                    {log.message}
                  </span>
                ))}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
  