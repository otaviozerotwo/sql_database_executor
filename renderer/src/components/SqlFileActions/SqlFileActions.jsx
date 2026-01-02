import { FaFileUpload, FaArrowDown } from 'react-icons/fa';
import { FaPlay, FaStop } from 'react-icons/fa6';
import './SqlFileActions.css';

export function SqlFileActions({
  onUpload,
  onExecute,
  onStop,
  canUpload,
  canExecute,
  canStop,
  files
}) {
  return (
    <>
      <h2 className='title'>SQL Files</h2>
      <div className="file-actions-container">
        <div className='files-buttons'>
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
        <div className='files-count'>
          <span>{files.length} Pending file{files.length !== 1 ? 's' : ''}</span>
          <FaArrowDown size={24} />
        </div>
      </div>
    </>
  );
}