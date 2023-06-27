import { useSummoner } from 'api/summoner';
import { useState, useRef, useEffect } from 'react';
import { AxiosError } from 'axios';

export const Search = () => {
  const [name, setName] = useState('');

  const { isLoading, isFetching, refetch, isError, error } = useSummoner(
    name,
    `/profile/euw/${name}`
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div
      style={{
        backgroundImage: `url('/images/jinx.jpg')`,
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '150vw',
      }}
      className='flex justify-center items-center h-1/2'
    >
      <SearchBar
        handleChange={handleChange}
        isLoading={isLoading || isFetching}
        isError={isError}
        error={error}
        search={refetch}
      />
    </div>
  );
};

const SearchBar = ({
  handleChange,
  search,
  isLoading,
  isError,
  error,
}: SearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className='flex flex-col'>
      {isError && <div>{error.response?.status}</div>}
      <div className='flex h-16 w-80 z-10 bg-[#C89B3C] items-center p-2 rounded-lg'>
        {isLoading ? (
          <div role='status'>
            <svg
              aria-hidden='true'
              className='w-6 h-6 text-black animate-spin dark:text-gray-600 fill-[white]'
              viewBox='0 0 100 101'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                fill='currentColor'
              />
              <path
                d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                fill='currentFill'
              />
            </svg>
            <span className='sr-only'>Loading...</span>
          </div>
        ) : (
          <svg
            data-icon-name='search-alt-2'
            data-style='line'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            id='search-alt-2'
            className='icon line ml-1'
            width='24'
            height='24'
          >
            <path
              style={{
                fill: 'none',
                stroke: 'rgb(0, 0, 0)',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
              }}
              d='M19,11a8,8,0,1,1-8-8A8,8,0,0,1,19,11Zm2,10-4.34-4.34'
              id='primary'
            ></path>
          </svg>
        )}

        <div className='ml-3 rounded-lg border-black h-10 border-l-2'></div>
        <input
          ref={inputRef}
          onInput={(event) => handleChange(event)}
          onKeyDown={(key) => key.code == 'Enter' && search()}
          type='text'
          autoFocus
          className='pl-2 h-10 w-80 text-black font-semibold bg-transparent outline-none placeholder:text-black '
          placeholder='Search a summoner...'
        />
      </div>
    </div>
  );
};

type SearchProps = {
  handleChange: (event) => void;
  search: () => void;
  isLoading: boolean;
  isError: boolean;
  error: AxiosError;
};
