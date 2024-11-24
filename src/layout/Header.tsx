import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import starWarsLogo from '../assets/star-wars-logo.png';
import starWarsLogoMobile from '../assets/star-wars-logo-mobile.png';

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation(); // Hook para obtener la ruta actual

  const handleLogout = async () => {
    await logout();
    navigate('/home', {
      replace: true,
    });
  };

  const headerBgClass =
    ((location.pathname === '/starships') || (location.pathname === '/login') || (location.pathname === '/sign-up'))
      ? 'bg-transparent'
      : 'bg-black';

  return (

    <header className={`relative z-50 flex flex-col justify-center ${headerBgClass}`}>
      <div className="grid grid-cols-2 md:grid-cols-3 items-center md:items-start md:px-10 lg:px-30 my-7">
        <div className='hidden md:block'>
          <div className="flex items-center md:gap-2 lg:gap-4">
            <a href="https://www.tiktok.com/@starwars?lang=es" className=' text-white transition-all duration-300 cursor-pointer hover:text-white hover:drop-shadow-[0_0_7px_rgba(255,255,255,0.7)] hover:font-medium' aria-label='Star Wars TikTok account' target='_blank'>
              <svg xmlns="http://www.w3.org/2000/svg" height="" width="21" viewBox="0 0 448 512">
                <path fill="#ffffff" d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/starwars/" className=' text-white transition-all duration-300 cursor-pointer hover:text-white hover:drop-shadow-[0_0_7px_rgba(255,255,255,0.7)] hover:font-medium' aria-label='Star Wars Instagram account' target='_blank'>
              <svg xmlns="http://www.w3.org/2000/svg" height="" width="21" viewBox="0 0 448 512">
                <path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
            <a href="https://www.x.com/starwars/" className=' text-white transition-all duration-300 cursor-pointer hover:text-white hover:drop-shadow-[0_0_7px_rgba(255,255,255,0.7)] hover:font-medium' aria-label='Star Wars X (Twitter) account' target='_blank'>
              <svg xmlns="http://www.w3.org/2000/svg" height="" width="24" viewBox="0 0 512 512">
                <path fill="#ffffff" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/StarWars/" className=' text-white transition-all duration-300 cursor-pointer hover:text-white hover:drop-shadow-[0_0_7px_rgba(255,255,255,0.7)] hover:font-medium' aria-label='Star Wars Facebook account' target='_blank'>
              <svg xmlns="http://www.w3.org/2000/svg" height="" width="24" viewBox="0 0 512 512">
                <path fill="#ffffff" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/StarWars/" className='border-[#787878] border-r md:pr-3 lg:pr-5 text-white transition-all duration-300 cursor-pointer hover:text-white hover:drop-shadow-[0_0_7px_rgba(255,255,255,0.7)] hover:font-medium' aria-label='Star Wars Youtube channel' target='_blank'>
              <svg xmlns="http://www.w3.org/2000/svg" height="" width="27" viewBox="0 0 576 512">
                <path fill="#ffffff" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
              </svg>
            </a>
            <a href="https://starwarskids.com/" className='text-white transition-all duration-300 cursor-pointer hover:text-white hover:drop-shadow-[0_0_7px_rgba(255,255,255,0.7)] hover:font-medium' aria-label='Star Wars Kids' target='_blank'>
              <svg fill="none" height="" viewBox="0 0 40 15" width="40" xmlns="http://www.w3.org/2000/svg">
                <rect fill="white" height="15" rx="7.5" width="38.7" x="0.557617" />
                <path clipRule="evenodd" d="M8.58428 3H5.95703V12H8.58428V10.0843L9.25797 9.14579L10.796 12H13.9277H13.9285H16.917V3H13.9277V11.9987L11.1329 6.90867L13.8724 3H10.8185L8.58428 6.36862V3ZM23.1389 7.51292C23.1389 8.81147 22.3357 9.37715 21.0906 9.37715H20.6367V5.62305H21.0906C22.3357 5.62305 23.1389 6.18859 23.1389 7.48715V7.51292ZM21.0326 3H17.9141V12H20.9397C24.2329 12 25.8855 10.11 25.8855 7.44852V7.42302C25.8855 4.76154 24.2679 3 21.0326 3ZM27.3774 8.6902L25.8857 10.5373C26.9477 11.5043 28.4752 12 30.1698 12C32.4131 12 33.8572 10.8844 33.8572 9.06206V9.03734C33.8572 7.28928 32.4251 6.64471 30.289 6.2355C29.406 6.06193 29.1793 5.91335 29.1793 5.67771V5.65299C29.1793 5.44221 29.3702 5.29349 29.7879 5.29349C30.5636 5.29349 31.5063 5.55384 32.2939 6.14885L33.6542 4.19014C32.6876 3.39671 31.4943 3 29.8834 3C27.5802 3 26.3393 4.27692 26.3393 5.92571V5.95056C26.3393 7.78527 27.986 8.34306 29.8596 8.73978C30.7544 8.92571 31.0171 9.06206 31.0171 9.30993V9.33478C31.0171 9.57028 30.8022 9.70664 30.3011 9.70664C29.3224 9.70664 28.2842 9.4092 27.3774 8.6902Z" fill="black" fillRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex justify-center h-fit">
          <img src={starWarsLogoMobile} aria-label='Star Wars Logo' className='md:hidden'/>
          <img src={starWarsLogo} aria-label="Star Wars Logo" className='hidden md:block' />
        </div>


        <div className="flex justify-end h-fit">
          {user !== undefined ?
            <div className="flex items-center">
              <img className='rounded-full' src={user.displayName !== null ? user.photoURL : '../../src/assets/default-avatar.jpg'} height={50} width={50} alt="" />
              <p className='px-4'>Howdy, {user.displayName !== null ? user.displayName.split(' ')[0] : 'fella'}!</p>
              <button
                className="px-4 text-white cursor-pointer transition-all duration-300 relative drop-shadow-[0_0_7px_rgba(255,255,255,0.7)] border rounded 
                           hover:drop-shadow-[0_0_20px_rgba(255,0,0,0.8)] hover:border-red-600 hover:text-red-500 hover:ring-1 hover:ring-red-500 hover:animate-pulse"
                onClick={() => handleLogout()}
              >
                Log Out
              </button>
            </div>
            :
            <ul className="flex divide-x-2">
              <NavLink to='/login'>
                <li className="px-4 text-white transition-all duration-300 cursor-pointer hover:text-white hover:drop-shadow-[0_0_7px_rgba(255,255,255,0.7)] hover:font-medium">LOG IN</li>
              </NavLink>
              <NavLink to='/sign-up'>
                <li className="px-4 text-white transition-all duration-300 cursor-pointer hover:text-white hover:drop-shadow-[0_0_7px_rgba(255,255,255,0.7)] hover:font-medium">SIGN UP</li>
              </NavLink>
            </ul>
          }
        </div>
      </div>

      <nav className="flex justify-center mb-4 border-t-2 border-b-2 border-[#787878]">
        <ul className="flex">
          <li className="px-4 py-2 text-white transition-all duration-300 cursor-pointer hover:text-white hover:drop-shadow-[0_0_7px_rgba(255,255,255,0.7)] hover:font-medium">
            <NavLink to='/home'>HOME</NavLink>
          </li>
          <li className="px-4 py-2 text-white transition-all duration-300 cursor-pointer hover:text-white hover:drop-shadow-[0_0_7px_rgba(255,255,255,0.7)] hover:font-medium">
            <NavLink to='/starships'>STARSHIPS</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
