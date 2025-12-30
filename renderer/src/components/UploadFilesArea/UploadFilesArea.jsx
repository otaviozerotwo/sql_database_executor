import { FaFileUpload } from 'react-icons/fa';
import { FaPlay, FaStop } from 'react-icons/fa6';
import './UploadFilesArea.css';

export function UploadFilesArea() {
  return (
    <div className="sql-files">
      <h2 className='title'>SQL Files</h2>
      <div className='sql-files-button-container'>
        <button
          type='button'
          className='btn'
        >
          <FaFileUpload />
          Upload SQL Files
        </button>
        <button
          type='button'
          className='btn btn-disabled'
        >
          <FaPlay />
          Execute All
        </button>
        <button
          type='button'
          className='btn btn-disabled'
        >
          <FaStop />
          Stop Execution
        </button>
      </div>
    </div>
  );
}