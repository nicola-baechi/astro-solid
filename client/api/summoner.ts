import { useQuery } from 'react-query';
import type { Summoner } from '../types/player'
import { request } from '../utils/request';

export const getSummoner = (username: string): Promise<Summoner> => {
    return request<Summoner>(`http://localhost:8080/player/${username}`)
}

export const useSummoner = (username: string) => {
    return useQuery({
        queryKey: ['search', username],
        queryFn: () => { username && getSummoner(username) },
    })
}