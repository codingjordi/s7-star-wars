import React, { useState } from 'react'
import { useAuth } from '../../context/authContext'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoggingIn, setIsLoggingIn] = useState(false)

    const { login, loginWithGoogle, setUser } = useAuth()
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        setError('')
        setIsLoggingIn(true)
        try {
            await login(email, password)
            navigate('/starships', {
                replace: true
            })
            console.log('Login; ', login, typeof login)
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoggingIn(false)
        }
    }

    const handleGoogle = async (e) => {
        e.preventDefault()
        setError('')
        setIsLoggingIn(true)
        try {
            await loginWithGoogle()

            navigate('/starships', {
                replace: true
            })

        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoggingIn(false)
        }
    }

    return (
        <>
            <div className="stars">
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
            </div>
            <div className='mx-2 md:mx-auto flex flex-col items-center bg-zinc-600 my-8 p-3 rounded-lg md:w-2/4 lg:w-1/4 relative z-10'>
                <div className=''>
                    <h2 className='text-2xl font-semibold text-center'>Log in to the galaxy archive</h2>
                    {error && <p className='text-red-500 mb-2'>{error}</p>}
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="email">Email</label>
                            <input
                                className='rounded pl-[6px] py-1'
                                type="email"
                                id='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="password">Password</label>
                            <input
                                className='rounded pl-[6px] py-1'
                                type="password"
                                id='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            onClick={handleLogin}
                            disabled={isLoggingIn}
                            className='bg-slate-700 hover:bg-slate-800 py-2 rounded-xl disabled:opacity-50'
                        >
                            {isLoggingIn ? 'Iniciando...' : 'Take me there!'}
                        </button>
                        <button
                            className="gsi-material-button"
                            onClick={handleGoogle}
                            disabled={isLoggingIn}
                        >
                            <div className="gsi-material-button-state"></div>
                            <div className="gsi-material-button-content-wrapper">
                                <div className="gsi-material-button-icon">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style={{ display: 'block' }}>
                                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                                        <path fill="none" d="M0 0h48v48H0z"></path>
                                    </svg>
                                </div>
                                <span className="gsi-material-button-contents">Sign in with Google</span>
                                <span style={{ display: 'none' }}>Sign in with Google</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}