import './App.css';
import { FaDatabase } from 'react-icons/fa';
import { FaPlug, FaTerminal, FaPlay, FaStop, FaS } from 'react-icons/fa6';

function App() {
  return (
    <>
      <header className='header'>
        <div className='header-container'>
          <div className='header-title'>
            <FaDatabase size={32} />
            <h1>SQL Database Executor</h1>
          </div>
          <div className='conn-status'>
            <span className='conn-status-description'>Disconnected</span>
          </div>
        </div>
      </header>
      <div className='container-grid'>
        <aside className='aside'>
          <form className='form'>
            <h2 className='form-title'>Database Connection</h2>
            <div className='form-group'>
              <label className='form-label'>Host</label>
              <input className='form-input' type='text' placeholder='localhost' />
            </div>
            <div className='form-group'>
              <label className='form-label'>Port</label>
              <input className='form-input' type='number' placeholder='5432' />
            </div>
            <div className='form-group'>
              <label className='form-label'>Database</label>
              <input className='form-input' type='text' placeholder='mydb' />
            </div>
            <div className='form-group'>
              <label className='form-label'>Username</label>
              <input className='form-input' type='text' placeholder='postgres' />
            </div>
            <div className='form-group'>
              <label className='form-label'>Password</label>
              <input className='form-input' type='password' placeholder='********' />
            </div>
            <button 
              type='submit' 
              className='btn-submit'
            >
              <FaPlug size={16} />
              Connect
            </button>
          </form>

          <div className="sql-files">
            <h2 className='sql-files-title'>SQL Files</h2>
            <button 
              type='submit' 
              className='btn-disabled'
            >
              <FaPlay size={16} />
              Execute All
            </button>
            <button 
              type='submit' 
              className='btn-disabled'
            >
              <FaStop size={16} />
              Cancel Execution
            </button>
          </div>
        </aside>
        <main className='main'>
          <div className="main-heade">
            <h2 className='main-title'>Execution Log</h2>
          </div>
          <div className='main-content-empty'>
            <FaTerminal size={48} />
            <p>No execution logs yet. Connect to database and upload SQL files to start.</p>
          </div>
          <div className="main-footer"></div>
        </main>
      </div>
    </>
  );
}

export default App;
