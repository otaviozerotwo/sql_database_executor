import './App.css';
import { FaDatabase, FaFileUpload } from 'react-icons/fa';
import { FaTerminal, FaPlay, FaStop } from 'react-icons/fa6';
import { ConnectionForm } from './components/ConnectionForm/ConnectionForm';

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
          <ConnectionForm />
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
