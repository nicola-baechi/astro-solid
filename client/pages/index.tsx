import { Hero, Search } from 'components';

const Home = () => {
  return (
    <>
      <main className='h-screen bg-[#010A13] flex flex-col'>
        <Search />
        <Hero />
      </main>
    </>
  );
};

export default Home;
