import { ConnectionForm } from './components/ConnectionForm/ConnectionForm';
import { Header } from './components/Header/Header';
import { useDatabaseConnection } from './hooks/useDatabaseConnection';
import { UploadFilesArea } from './components/UploadFilesArea/UploadFilesArea';
import { ExecutionLog } from './components/ExecutionLog/ExecutionLog';
import './App.css';

function App() {
  const db = useDatabaseConnection();

  return (
    <>
      <Header status={db.status} message={db.message} />
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
          <UploadFilesArea />
          <ExecutionLog />
        </main>
      </div>
    </>
  );
}

export default App;
