import { useQuery } from 'react-query';
import type { Summoner } from '../types/summoner'
import axios, { AxiosResponse, AxiosError } from 'axios';
import { useRouter } from 'next/router';


export const getSummoner = async (username: string): Promise<Summoner> => {
    const response: AxiosResponse = await axios.get<Summoner>(`http://localhost:8080/player/${username}`);
    return response.data;
}

export const useSummoner = (username: string, route?: string) => {
    const router = useRouter();

    const { isLoading, isFetching, isSuccess, refetch, isError, error, data } = useQuery({
        queryKey: ['search', username],
        queryFn: ({ queryKey }) => getSummoner(queryKey[1]),
        staleTime: 10 * (60 * 1000),
        retry: false,
        enabled: false,
        refetchOnWindowFocus: false,
        onSuccess: () => router.push({
            pathname: route as string,
            query: data
        }),

    })
    return { isLoading, isFetching, isSuccess, refetch, isError, summoner: data, error: error as AxiosError }
}