import { useState } from 'react';

export default function LoginForm({ onLogin }) {

  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    console.log({
      username,
      password
    });

    onLogin(event.target.username.value, event.target.password.value);
  }

  function handleUserName(e) {
    setUserName(e.target.value);
  }
  function handleUserPassword(e) {
    setPassword(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className='mx-12 my-6 py-4 bg-green-500 text-center text-gray-50 rounded-lg'>
      <fieldset autoComplete='off'>
        <label htmlFor="username">USER NAME</label>
        <br></br>
        <input onChange={handleUserName} name="username" placeholder="user name" className='text-blue-500 text-center' />
        <br></br><br></br>
        <label htmlFor="password">PASSWORD</label>
        <br></br>
        <input onChange={handleUserPassword} type="password" name="password" placeholder="password" className='text-blue-500 text-center' />
        <br></br><br></br>
        <button className="px-8 py-1.5 bg-blue-400 text-gray-50 rounded-lg">Log In</button>
      </fieldset>
    </form>
  );
}