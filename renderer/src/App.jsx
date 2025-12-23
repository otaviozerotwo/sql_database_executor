import './App.css';
import { FaDatabase, FaFileUpload } from 'react-icons/fa';
import { FaPlug, FaTerminal, FaPlay, FaStop } from 'react-icons/fa6';

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
            <span className='conn-status-description'>Disconnected</span> {/* TODO: incluir bullet colorido */}
          </div>
        </div>
      </header>
      <div className='container-grid'>
        <aside className='aside'>
          <form className='form'>
            <h2 className='form-title'>Database Connection</h2>
            <div className='form-group'>
              <label className='form-label'>Host</label>
              <input id='inputDbHost' className='form-input' type='text' placeholder='localhost' />
            </div>
            <div className='form-group'>
              <label className='form-label'>Port</label>
              <input id='inputDbPort' className='form-input' type='number' placeholder='5432' />
            </div>
            <div className='form-group'>
              <label className='form-label'>Database</label>
              <input id='inputDbName' className='form-input' type='text' placeholder='mydb' />
            </div>
            <div className='form-group'>
              <label className='form-label'>Username</label>
              <input id='inputDbUser' className='form-input' type='text' placeholder='postgres' />
            </div>
            <div className='form-group'>
              <label className='form-label'>Password</label>
              <input id='inputDbPass' className='form-input' type='password' placeholder='********' />
            </div>
            <button 
              type='submit' 
              className='btn-submit'
            >
              <FaPlug size={16} />
              Connect
            </button>
          </form>
        </aside>
        <main className='main'>
          <div className="sql-files">
            <h2 className='main-title'>SQL Files</h2>
            <div className="container">
              <div className="sql-upload-area">
                <FaFileUpload size={48} />
                <p>Drag and drop SQL files here</p>
                <p>or click to browse</p> {/* TODO: substituir p por button */}
              </div>
              <div className="sql-files-btn">
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
            </div>
          </div>
          <div className='execution-log'>
            <div className="execution-log-header">
              <h2 className='main-title'>Execution Log</h2>
            </div>
            <div className='execution-log-content-empty'>
              <FaTerminal size={48} />
              <p>No execution logs yet. Connect to database and upload SQL files to start.</p>
            </div>
            <div className="footer"></div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
