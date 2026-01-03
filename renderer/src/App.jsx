import { ConnectionForm } from './components/ConnectionForm/ConnectionForm';
import { Header } from './components/Header/Header';
import { useAppController } from './hooks/useAppController';
import { SqlFileActions } from './components/SqlFileActions/SqlFileActions';
import { ExecutionLog } from './components/ExecutionLog/ExecutionLog';
import { SqlFileList } from './components/SqlFileList/SqlFileList';
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
          <SqlFileActions
            onUpload={appController.uploadFiles}
            onExecute={appController.executeAll}
            onStop={appController.stopExecution}
            canUpload={appController.canUpload}
            canExecute={appController.canExecute}
            canStop={appController.canStop}
            files={appController.files}
            onRemove={appController.removeFile}
          />
          <SqlFileList
            files={appController.files}
            onRemove={appController.removeFile}
          />
          <ExecutionLog 
            dbStatus={appController.dbStatus}
            logs={appController.executionLogs}
          />
        </main>
      </div>
    </>
  );
}

export default App;
