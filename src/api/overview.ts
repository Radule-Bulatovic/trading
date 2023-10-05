import { AxiosResponse } from 'axios';

import { ENDPOINTS } from '../constants';
import { Overview } from '../types';

import { http } from './http';

export const overview = {
  all: (): Promise<AxiosResponse<Overview, any>> => http(ENDPOINTS.OVERVIEW)
};
