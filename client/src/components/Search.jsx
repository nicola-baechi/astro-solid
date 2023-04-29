export default function Search() {
  return (
    <div
      style={{
        'background-image': `url('/images/jinx.jpg')`,
        'background-position': 'top',
        'background-repeat': 'no-repeat',
        'background-blend-mode': 'overlay',
        'background-size': '100vw',
      }}
      class='flex justify-center items-center h-1/4 sm:h-1/2'
    >
      <SearchBar />
    </div>
  );
}

const SearchBar = () => {
  const search = () => {
    fetch()
  };

  return (
    <div class='flex h-16 w-80 z-10 bg-[#C89B3C] items-center p-2 rounded-lg'>
      <svg
        data-icon-name='search-alt-2'
        data-style='line'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        id='search-alt-2'
        class='icon line ml-1'
        width='24'
        height='24'
      >
        <path
          style='fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;'
          d='M19,11a8,8,0,1,1-8-8A8,8,0,0,1,19,11Zm2,10-4.34-4.34'
          id='primary'
        ></path>
      </svg>
      <div class='ml-3 rounded-lg border-neutral-950 h-10 border-l-2'></div>
      <input
        onKeyDown={(key) => key.code == 'Enter' && search()}
        type='text'
        autofocus
        class='pl-2 h-10 w-80 font-semibold bg-transparent outline-none placeholder:text-black'
        placeholder='Search a summoner...'
      />
    </div>
  );
};
