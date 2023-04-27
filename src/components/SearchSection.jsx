import SearchBar from './SearchBar';

export default function SearchSection() {
  const url =
    'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/KSante_0.jpg';

  return (
    <main class='h-screen bg-[#010A13] flex flex-col'>
      <div
        style={{
          'background-image': `url(${url})`,
          'background-position': 'top',
          'background-repeat': 'no-repeat',
          'background-blend-mode': 'overlay',
          'background-size': '100vw',
        }}
        class='flex justify-center items-center h-1/4 sm:h-1/2'
      >
        <SearchBar />
      </div>
      <div class='flex h-1/4 sm:h-1/2 justify-center items-center flex-col'>
        <h1 class='text-white font-bold sm:text-4xl text-sm font-["Press_Start_2P"] '>
          ANALYZE YOUR
        </h1>
        <div
          class='text-white font-bold sm:text-5xl 
        text-lg font-["Press_Start_2P"] [&>*:nth-child(odd)]:text-[#C89B3C]'
        >
          HABITS & <span> P</span>
          <span>A</span>
          <span>T</span>
          <span>T</span>
          <span>E</span>
          <span>R</span>
          <span>N</span>
          <span>S</span>
        </div>
      </div>
    </main>
  );
}
