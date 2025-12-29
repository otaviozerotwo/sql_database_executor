import { FaFileUpload } from 'react-icons/fa';
import { FaPlay, FaStop } from 'react-icons/fa6';
import './UploadFilesArea.css';

export function UploadFilesArea() {
  return (
    <div className="sql-files">
      <h2 className='title'>SQL Files</h2>
      <div className="container">
        <div>
          <button 
            type='submit' 
            className='btn-submit'
          >
            <FaFileUpload size={16} />
            Upload Files
          </button>
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
  );
}