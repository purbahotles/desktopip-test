// src/app/signin/page.tsx
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';


const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email !== '') {
      localStorage.setItem('user', JSON.stringify({ email }));
      router.push('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className=" bg-blue-950 h-full flex flex-col">
      
      <section className="bg-cover bg-center mb-10 min-h-screen relative" style={{ backgroundImage: 'url(/images/login.png)' }}>
        <div className='grid grid-cols-1 md:m-10 p-5 rounded-lg relative z-50'>
          <Header characterName={''}/>
        </div>

        <section className='relative z-50'>
          <div className="flex items-center justify-center">
            <div className="p-8 md:pb-40 md:pt-40 bg-white text-black rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-2xl font-bold text-blue-950 mb-6 text-center">Sign In</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-stone-500 text-white font-semibold rounded-full shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Sign In
                </button>

                <div className='text-center'>
                  <a className='text-blue-800'>Forgot Password?</a>
                  <p>Don't have an account? <a className='text-blue-800'> Sign Up</a></p>
                </div>
                
              </form>
            </div>
            </div>
        </section>

        </section>

        
        </div>

    
  );
};

export default SignIn;
