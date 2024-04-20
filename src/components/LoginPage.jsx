import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your login logic here
  };

  const handleGoogleSignIn = () => {
    // Implement Google sign-in logic
  };

  return (
    <main className='bg-gray-50 dark:bg-gray-50 w-full h-screen flex flex-col items-center justify-center px-4'>
      <div className='max-w-sm w-full text-gray-600 dark:text-gray-600'>
        <div className='text-center'>
          <img
            src='/logo.svg'
            alt='Your Logo'
            className='mx-auto w-[30%]'
          />
          <div className='mt-5 space-y-2'>
            <h3 className='text-gray-800 dark:text-gray-600 text-2xl font-bold sm:text-3xl'>
              Log in to your account
            </h3>
          </div>
        </div>
        <form onSubmit={handleSubmit} className='mt-8 space-y-5'>
          <div>
            <label className='font-medium'>Email</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='w-full mt-2 bg-white dark:bg-gray-800 dark:focus:bg-gray-700 dark:text-gray-200 focus:border-gray-800 px-3 py-2 rounded-lg'
            />
          </div>
          <div>
            <label className='font-medium'>Password</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='w-full mt-2 bg-white dark:bg-gray-800 dark:focus:bg-gray-700 dark:text-gray-200 focus:border-gray-800 px-3 py-2 rounded-lg'
            />
          </div>
          <button className='w-full text-white bg-gray-800 dark:bg-sky-500 hover:bg-gray-700 dark:hover:bg-sky-600 ring-offset-2 ring-gray-800 dark:ring-sky-500 focus:ring shadow rounded-lg px-3 py-2'>
            Sign In With Email
          </button>
          <button onClick={handleGoogleSignIn} className='flex items-center justify-center w-full text-slate-900 bg-slate-300 hover:bg-slate-400 mt-3 py-2 rounded-lg'>
            <img src='/google-logo.svg' alt='Google Logo' className='w-6 h-6 mr-2' /> Sign in with Google
          </button>
          <div className='text-center'>
            <Link
              to='#'
              className='hover:text-blue-600 dark:hover:text-sky-500 duration-150'>
              Forgot password?
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
