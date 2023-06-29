import { useSummoner } from 'api/summoner';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Summoner } from 'types/summoner';

const Summoner = () => {
  const name = useRouter().query.summoner;

  const [summoner, setSummoner] = useState<Summoner>();

  const { summoner: data } = useSummoner(name as string);

  useEffect(() => {
    setSummoner(data);
  }, []);

  return (
    <>
      <div className='h-screen bg-[#010A13] flex flex-col items-center'>
        <h1 className=' text-5xl '>{summoner?.name}</h1>
        <div>
          <Image
            src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/profileicon/${summoner?.profileIconId}.png`}
            width={200}
            height={200}
            className='rounded-full'
            alt='profileIconId'
          />
        </div>
      </div>
    </>
  );
};

export default Summoner;
