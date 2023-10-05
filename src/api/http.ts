import axios, { AxiosInstance } from 'axios';

import { API_URL } from '../constants';

export const http: AxiosInstance = axios.create({ baseURL: API_URL });
