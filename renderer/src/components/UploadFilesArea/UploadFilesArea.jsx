import { FaFileUpload, FaArrowDown } from 'react-icons/fa';
import { FaPlay, FaStop } from 'react-icons/fa6';
import './UploadFilesArea.css';

export function UploadFilesArea({
  onUpload,
  onExecute,
  onStop,
  canUpload,
  canExecute,
  canStop,
  files
}) {
  return (
    <div className="sql-files">
      <h2 className='title'>SQL Files</h2>
      <div className='sql-files-button-container'>
        <button
          type='button'
          className='btn'
          onClick={onUpload}
          disabled={!canUpload}
        >
          <FaFileUpload />
          Upload SQL Files
        </button>
        <button
          type='button'
          className='btn'
          onClick={onExecute}
          disabled={!canExecute}
        >
          <FaPlay />
          Execute All
        </button>
        <button
          type='button'
          className='btn'
          onClick={onStop}
          disabled={!canStop}
        >
          <FaStop />
          Stop Execution
        </button>
      </div>
      <div className="sql-files-count">
        <span className='sql-files-count-title'>Pending Files</span>
        <span className='sql-files-count-number'>{files.length}</span>
        <FaArrowDown size={24}/>
      </div>
    </div>
  );
}