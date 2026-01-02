import { CiFileOff } from "react-icons/ci";
import { FaTrashAlt } from 'react-icons/fa';
import './SqlFileList.css';

export function SqlFileList({ files, onRemove }) {
  return (
    <div className='list-container'>
      <div className='list'>
        {files.length === 0 && 
          <div className='list-empty'>
            <CiFileOff size={26} />
            <p className='list-empty-text'>No SQL files uploaded.</p>
          </div>
        }
        {files.length > 0 && (
          <ul className='list-items'>
            {files.map((file, index) => (
              <li key={file.path || index} className='list-item'>
                {index + 1} - {file.name}
                <button 
                  onClick={() => onRemove(file.path)}
                >
                  <FaTrashAlt />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}