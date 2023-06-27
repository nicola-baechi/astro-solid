import { useRouter } from 'next/router';

const Summoner = () => {
  const router = useRouter();

  const { query } = router;

  console.log(query);

  return (
    <>
      <div className='h-screen bg-[#010A13] flex flex-col'>{query.data}</div>
    </>
  );
};

export default Summoner;
