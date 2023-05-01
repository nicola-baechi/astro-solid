import { Hero, Search } from 'components';

const Home = () => {
  return (
    <div className='h-screen bg-[#010A13] flex flex-col'>
      <Search />
      <Hero />
    </div>
  );
};

export default Home;
