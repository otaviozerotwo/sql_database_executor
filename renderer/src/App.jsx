import { ConnectionForm } from './components/ConnectionForm/ConnectionForm';
import { Header } from './components/Header/Header';
import { useAppController } from './hooks/useAppController';
import { UploadFilesArea } from './components/UploadFilesArea/UploadFilesArea';
import { ExecutionLog } from './components/ExecutionLog/ExecutionLog';
import './App.css';

function App() {
  const appController = useAppController();

  return (
    <>
      <Header dbStatus={appController.dbStatus} message={appController.message} />
      <div className='container-grid'>
        <aside className='aside'>
          <ConnectionForm 
            isConnected={appController.isConnected}
            dbStatus={appController.dbStatus}
            onConnect={appController.connect}
            onDisconnect={appController.disconnect}
          />
        </aside>
        <main className='main'>
          <UploadFilesArea
            onUpload={appController.uploadFiles}
            onExecute={appController.executeFiles}
            onStop={appController.stopExecution}
            canUpload={appController.canUpload}
            canExecute={appController.canExecute}
            canStop={appController.canStop}
            files={appController.files}
          />
          <ExecutionLog />
        </main>
      </div>
    </>
  );
}

export default App;
