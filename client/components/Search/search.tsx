import { useState } from 'react';
import { getPlayer } from '../../api/getPlayer';

export const Search = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/images/jinx.jpg')`,
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '150vw',
      }}
      className='flex justify-center items-center h-1/2'
    >
      <SearchBar />
    </div>
  );
};

const SearchBar = () => {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);

    console.log('value is:', event.target.value);
  };

  const search = async () => {
    console.log(name);
    const player = await getPlayer(name);
    console.log(`player is ${player.summonerLevel}`);
  };

  return (
    <div className='flex h-16 w-80 z-10 bg-[#C89B3C] items-center p-2 rounded-lg'>
      <svg
        data-icon-name='search-alt-2'
        data-style='line'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        id='search-alt-2'
        className='icon line ml-1'
        width='24'
        height='24'
      >
        <path
          style={{
            fill: 'none',
            stroke: 'rgb(0, 0, 0)',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 2,
          }}
          d='M19,11a8,8,0,1,1-8-8A8,8,0,0,1,19,11Zm2,10-4.34-4.34'
          id='primary'
        ></path>
      </svg>
      <div className='ml-3 rounded-lg border-black h-10 border-l-2'></div>
      <input
        onInput={(event) => handleChange(event)}
        value={name}
        onKeyDown={(key) => key.code == 'Enter' && search()}
        type='text'
        autoFocus
        className='pl-2 h-10 w-80 text-black font-semibold bg-transparent outline-none placeholder:text-black '
        placeholder='Search a summoner...'
      />
    </div>
  );
};