export default function Hero() {
  return (
    <div class='flex font-["Oswald"] font-extrabold tracking-[.20em] h-1/4 sm:h-1/2 justify-center sm:gap-5 gap-2 items-center flex-col'>
      <h1 class='text-white  sm:text-5xl text-3xl'>ANALYZE YOUR</h1>
      <div class='flex'>
        <h1 class='sm:text-7xl text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#dd5e89] to-[#f7bb97]'>
          HABITS
        </h1>
        <span class='sm:text-7xl text-white text-4xl tracking-tighter'>
          &nbsp;& &nbsp;
        </span>
        <div class='text-white sm:text-7xl text-4xl [&>*:nth-child(2n)]:text-[#C89B3C]'>
          <span>P</span>
          <span>A</span>
          <span>T</span>
          <span>T</span>
          <span>E</span>
          <span>R</span>
          <span>N</span>
          <span>S</span>
        </div>
      </div>
    </div>
  );
}
