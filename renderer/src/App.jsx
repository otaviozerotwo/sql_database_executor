import './App.css';
import { FaFileUpload } from 'react-icons/fa';
import { FaTerminal, FaPlay, FaStop } from 'react-icons/fa6';
import { ConnectionForm } from './components/ConnectionForm/ConnectionForm';
import { Header } from './components/Header/Header';
import { useDatabaseConnection } from './hooks/useDatabaseConnection';

function App() {
  const db = useDatabaseConnection();

  return (
    <>
      <Header message={db.message} />
      <div className='container-grid'>
        <aside className='aside'>
          <ConnectionForm 
            isConnected={db.isConnected}
            status={db.status}
            onConnect={db.connect}
            onDisconnect={db.disconnect}
          />
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
