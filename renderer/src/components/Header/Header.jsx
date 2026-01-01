import './Header.css';
import { FaDatabase } from 'react-icons/fa';

export function Header({ message, dbStatus }) {
  return (
    <header className='header'>
      <div className='header-container'>
        <div className='header-title'>
          <FaDatabase size={32} />
          <h1>SQL Database Executor</h1>
        </div>
        <div>
          {dbStatus === 'connected' 
            ? <span className='conn-status-bullet conn-status-color-indicator-connected'></span>
            : dbStatus === 'connecting'
              ? <span className='conn-status-bullet conn-status-color-indicator-connecting'></span>
              : dbStatus === 'disconnecting'
                ? <span className='conn-status-bullet conn-status-color-indicator-disconnecting'></span>
                  : <span className='conn-status-bullet conn-status-color-indicator-disconnected'></span>
          }
          {dbStatus === 'connecting'
            ? <span className='conn-status-description'>Connecting...</span>
            : <span className='conn-status-description'>{message}</span>
          }
        </div>
      </div>
    </header>
  );
}