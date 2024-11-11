import './index.css';
import starWarsLogo from './assets/star-wars-logo.png';
import StarshipList from './StarshipList.tsx';

export default function App() {
  return (
    <>
      <header className='flex flex-col justify-center py-6'>
        <div className='flex justify-center'>
          <img src={starWarsLogo} width={250} alt="Star Wars Logo" />
        </div>
        <nav className='flex justify-center border-t-2 border-b-2 border-[#787878]'>
          <ul className='flex border-x-2 border-[#787878] divide-x-2'>
            <li className="border-y border-[#787878] first:border-l last:border-r px-4 py-2">HOME</li>
            <li className="border-y border-[#787878] first:border-l last:border-r px-4 py-2">STARSHIPS</li>
          </ul>
        </nav>
      </header>

      <main className='flex justify-center'>
        <StarshipList />
      </main>
    </>
  );
}
