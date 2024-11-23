import React, { useState } from 'react'
import { useAuth } from '../../context/authContext'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confrimPassword, setConfirmPassword] = useState('')
  const [isSigningIn, setIsSigningIn] = useState(false)
  const [error, setError] = useState(null)

  const { register } = useAuth()

  const handleRegister = async (e) => {
    e.preventDefault()
    setIsSigningIn(true)
    try {
      await register(email, password)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className='mx-auto flex flex-col items-center bg-zinc-600 my-8 p-3 rounded-lg'>
      <h2 className='text-2xl font-semibold text-center'>
        Join in to the best Star Wars archive
      </h2>

      <div className='flex flex-col gap-4'>
        {error && <p className='text-red-700'>{error}</p>}
        <div className='flex flex-col gap-1'>
          <label htmlFor="email">Email</label>
          <input 
              className='rounded pl-[6px]' 
              type="email" 
              id='email' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="password">Password</label>
          <input 
              className='rounded pl-[6px]' 
              type="password" 
              id='password' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="confirm-password">Confirm password</label>
          <input 
              className='rounded pl-[6px]' 
              type="password" 
              id='confirm-password' 
              value={confrimPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <button 
            className='bg-slate-700 hover:bg-slate-800 py-2 rounded-xl' 
            onClick={handleRegister}>Join me in!</button>
      </div>

    </div>
  )
}
