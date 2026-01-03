import { FaTerminal } from 'react-icons/fa6';
import './ExecutionLog.css';

export function ExecutionLog({ dbStatus, logs }) {
  
  return (
    <div className='execution-log'>
      <div className='execution-log-header'>
        <h2 className='title'>Execution Log</h2>
      </div>
      {dbStatus !== 'connected' || !logs || logs.length === 0 ? (
        <div className='execution-log-content'>
          <div className='execution-log-content-empty'>
            <FaTerminal size={48} />
            <p>No execution logs yet. Connect to database and upload SQL files to start.</p>
          </div>
        </div>
      ) : (
        <div className='execution-log-list-container'>
          <ul className='execution-log-list'>
            {logs.map((log, index) => (
              <li 
                key={index}
                className={`execution-log-item ${log.status}`}
              >
                <strong>{index + 1} - {log.file}</strong>
                <span>{log.message}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
  