import { useState } from 'react';
import './ConnectionForm.css';
import { FaPlug } from 'react-icons/fa6';

export function ConnectionForm({
  isConnected,
  status,
  onConnect,
  onDisconnect
}) {
  const [form, setForm] = useState({
    host: '',
    port: '',
    database: '',
    user: '',
    password: ''
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (isConnected) {
      await onDisconnect();
      return;
    }

    await onConnect(form);
  }
    
  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <h2 className='form-title'>Database Connection</h2>
        <div className='form-group'>
          <label className='form-label'>Host</label>
          <input 
            name='host' 
            className='form-input' 
            type='text' 
            placeholder='localhost' 
            onChange={handleChange} 
            disabled={isConnected}
          />
        </div>
        <div className='form-group'>
          <label className='form-label'>Port</label>
          <input 
            name='port'
            className='form-input' 
            type='number' 
            placeholder='1234' 
            onChange={handleChange} 
            disabled={isConnected}
          />
        </div>
        <div className='form-group'>
          <label className='form-label'>Database</label>
          <input 
            name='database' 
            className='form-input' 
            type='text' 
            placeholder='mydb' 
            onChange={handleChange} 
            disabled={isConnected}
          />
        </div>
        <div className='form-group'>
          <label className='form-label'>Username</label>
          <input 
            name='user' 
            className='form-input' 
            type='text' 
            placeholder='myuser' 
            onChange={handleChange} 
            disabled={isConnected}
          />
        </div>
        <div className='form-group'>
          <label className='form-label'>Password</label>
          <input 
            name='password' 
            className='form-input' 
            type='password' 
            placeholder='********' 
            onChange={handleChange} 
            disabled={isConnected}
          />
        </div>
        <button 
          type='submit' 
          className='btn-submit'
        >
          <FaPlug size={16} />
          {status === 'connecting' 
            ? 'Connecting...' 
            : status === 'disconnecting'
            ? 'Disconnecting...'
            : isConnected
            ? 'Disconnect'
            : 'Connect'}
        </button>
      </form>
    </>
  );
}