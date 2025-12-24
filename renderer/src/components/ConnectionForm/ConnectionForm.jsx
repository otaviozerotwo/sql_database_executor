import './ConnectionForm.css';
import { FaPlug } from 'react-icons/fa6';

export function ConnectionForm() {
  return (
    <form className='form'>
      <h2 className='form-title'>Database Connection</h2>
      <div className='form-group'>
        <label className='form-label'>Host</label>
        <input id='inputDbHost' className='form-input' type='text' placeholder='localhost' />
      </div>
      <div className='form-group'>
        <label className='form-label'>Port</label>
        <input id='inputDbPort' className='form-input' type='number' placeholder='5432' />
      </div>
      <div className='form-group'>
        <label className='form-label'>Database</label>
        <input id='inputDbName' className='form-input' type='text' placeholder='mydb' />
      </div>
      <div className='form-group'>
        <label className='form-label'>Username</label>
        <input id='inputDbUser' className='form-input' type='text' placeholder='postgres' />
      </div>
      <div className='form-group'>
        <label className='form-label'>Password</label>
        <input id='inputDbPass' className='form-input' type='password' placeholder='********' />
      </div>
      <button 
        type='submit' 
        className='btn-submit'
      >
        <FaPlug size={16} />
        Connect
      </button>
    </form>
  );
}