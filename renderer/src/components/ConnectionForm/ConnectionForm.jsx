import { useState } from 'react';
import { connectToDatabase } from '../../../renderer';
import './ConnectionForm.css';
import { FaPlug } from 'react-icons/fa6';

export function ConnectionForm() {
  const [form, setForm] = useState({
    host: '',
    port: '',
    database: '',
    user: '',
    password: ''
  });

  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('connecting');
    setMessage('');

    try {
      const result = await connectToDatabase(form);

      if (result.success) {
        setStatus('success');
        setMessage(result.message || 'Conectado com sucesso');
      } else {
        setStatus('error');
        setMessage(result.message || 'Erro ao conectar');
      }
    } catch (error) {
      setStatus('error');
      setMessage(error.message);
    }
  }
    
  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <h2 className='form-title'>Database Connection</h2>
        <div className='form-group'>
          <label className='form-label'>Host</label>
          <input name='host' className='form-input' type='text' placeholder='localhost' onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label className='form-label'>Port</label>
          <input name='port' id='inputDbPort' className='form-input' type='number' placeholder='1234' onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label className='form-label'>Database</label>
          <input name='database' id='inputDbName' className='form-input' type='text' placeholder='mydb' onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label className='form-label'>Username</label>
          <input name='user' id='inputDbUser' className='form-input' type='text' placeholder='myuser' onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label className='form-label'>Password</label>
          <input name='password' id='inputDbPass' className='form-input' type='password' placeholder='********' onChange={handleChange} />
        </div>
        <button 
          type='submit' 
          className='btn-submit'
          disabled={status === 'connecting'}
        >
          <FaPlug size={16} />
          {status === 'connecting' ? 'Connecting...' : 'Connect'}
        </button>
      </form>

      {message && <p style={{ textAlign: 'center' }}>{message}</p>} {/* TODO: trocar para alert component */}
    </>
  );
}