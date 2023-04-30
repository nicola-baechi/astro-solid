import type { Player } from '../types/player'
import { request } from '../utils/request';

export const getPlayer = (username: string): Promise<Player> => {
    return request<Player>(`http://localhost:8080/player/${username}`)
} 