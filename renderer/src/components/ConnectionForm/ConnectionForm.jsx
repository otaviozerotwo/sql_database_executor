import { useEffect, useState } from 'react';
import './ConnectionForm.css';
import { FaPlug, FaPlugCircleXmark } from 'react-icons/fa6';

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

  useEffect(() => {
    if (status === 'disconnected') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setForm({
        host: '',
        port: '',
        database: '',
        user: '',
        password: '' 
      });
    }
  }, [status]);

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
            value={form.host}
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
            value={form.port}
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
            value={form.database}
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
            value={form.user}
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
            value={form.password}
            className='form-input' 
            type='password' 
            placeholder='********' 
            onChange={handleChange} 
            disabled={isConnected}
          />
        </div>
        <button 
          type='submit' 
          className='form-btn'
        >
          {status === 'connected' ? <FaPlugCircleXmark size={16} /> : <FaPlug size={16} />}
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