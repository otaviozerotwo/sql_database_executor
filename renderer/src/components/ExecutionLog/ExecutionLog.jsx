import { FaTerminal } from 'react-icons/fa6';
import './ExecutionLog.css';

export function ExecutionLog() {
  return (
    <div className='execution-log'>
      <div className='execution-log-header'>
        <h2 className='title'>Execution Log</h2>
      </div>
      <div className='execution-log-content'>
        <div className='execution-log-content-empty'>
          <FaTerminal size={48} />
          <p>No execution logs yet. Connect to database and upload SQL files to start.</p>
        </div>
      </div>
    </div>
  );
}