import axios from 'axios';

export const BASE_API: string = 'https://jsonplaceholder.typicode.com/';
export const USER_LIST_API: string = 'users';

export const client = axios.create({
  baseURL: `${BASE_API}`,
});
