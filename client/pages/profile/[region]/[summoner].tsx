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
        <div className='flex m-10 gap-2'>
          <Image
            src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/profileicon/${summoner?.profileIconId}.png`}
            width={80}
            height={80}
            alt='profileIconId'
          />
          <h3 className='font-bold text-white  uppercase'>{summoner?.name}</h3>
        </div>
        <Image
            src={`https://cdn.mobalytics.gg/assets/lol/images/rank-icon/helm/challenger_1.png`}
            width={80}
            height={80}
            alt='profileIconId'
          />
      </div>
    </>
  );
};

export default Summoner;
