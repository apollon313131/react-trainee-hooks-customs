
import './App.css';
import { useState } from 'react';
import useInput from './hooks/useInput';
import Hover from './components/Hover';
import { Card } from 'react-bootstrap';

function App() {
  const username = useInput('')
  const password = useInput('')

  return (
    <div className='main'>
      <div className="useInput">
        <h1>Hook useInput </h1>
        <input {...username} type="text" placeholder='username' />
        <input {...password} type="text" placeholder='password' />
        <button onClick={() => console.log(username.value, password.value)}>Click</button>
      </div>
      <br /><br />
      <div className='useHover'>
        <h1>Hook useHover</h1>
        <Hover />
      </div>
    </div>

  );
}

export default App;
