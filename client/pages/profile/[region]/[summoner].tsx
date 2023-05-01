import { useRouter } from 'next/router';
import { useSummoner } from 'api/summoner';

const Summoner = () => {
  const router = useRouter();
  const { summoner } = router.query;
  const { isLoading, isSuccess, error, data } = useSummoner(summoner as string);

  return (
    <>
      {isLoading && <div>LOADING</div>}
      {isSuccess && <div>{JSON.stringify(data)}</div>}

      {error && <div>error</div>}
      <div className='h-screen bg-[#010A13] flex flex-col'></div>
    </>
  );
};

export default Summoner;
