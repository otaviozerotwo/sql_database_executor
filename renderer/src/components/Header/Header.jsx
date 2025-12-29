import './Header.css';
import { FaDatabase } from 'react-icons/fa';

export function Header({ message, status }) {
  return (
    <header className='header'>
      <div className='header-container'>
        <div className='header-title'>
          <FaDatabase size={32} />
          <h1>SQL Database Executor</h1>
        </div>
        <div>
          {status === 'connected' 
            ? <span className='conn-status-bullet conn-status-color-indicator-connected'></span>
            : status === 'connecting'
              ? <span className='conn-status-bullet conn-status-color-indicator-connecting'></span>
              : status === 'disconnecting'
                ? <span className='conn-status-bullet conn-status-color-indicator-disconnecting'></span>
                  : <span className='conn-status-bullet conn-status-color-indicator-disconnected'></span>
          }
          {status === 'connecting'
            ? <span className='conn-status-description'>Connecting...</span>
            : <span className='conn-status-description'>{message}</span>
          }
        </div>
      </div>
    </header>
  );
}