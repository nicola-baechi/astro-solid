import Hero from './Hero';
import Search from './Search';

export default function Home() {
  return (
    <main class='h-screen bg-[#010A13] flex flex-col'>
      <Search />
      <Hero />
    </main>
  );
}
