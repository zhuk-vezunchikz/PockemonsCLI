import { BASE_URL } from "../../config"

export const getPockemonsRequest = () => ({
    url: `${BASE_URL}/pokemon?limit=100&offset=200`,
    method: 'get',
    headers: {},

});