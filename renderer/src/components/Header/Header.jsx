import './Header.css';
import { FaDatabase } from 'react-icons/fa';

export function Header({ message }) {
  return (
    <header className='header'>
      <div className='header-container'>
        <div className='header-title'>
          <FaDatabase size={32} />
          <h1>SQL Database Executor</h1>
        </div>
        <div className='conn-status'>
          <span className='conn-status-description'>{message}</span> {/* TODO: incluir bullet colorido */}
        </div>
      </div>
    </header>
  );
}