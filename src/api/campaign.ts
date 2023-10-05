import axios, { AxiosResponse } from 'axios';

import { CAMPAIGNS_API_URL, ENDPOINTS } from '../constants';
import { Campaign } from '../types';

export const campaign = {
  all: (): Promise<AxiosResponse<Campaign[], any>> =>
    axios(`${CAMPAIGNS_API_URL}${ENDPOINTS.CAMPAIGNS}`),
  create: (data: Omit<Campaign, 'id'>): any =>
    axios(`${CAMPAIGNS_API_URL}${ENDPOINTS.CAMPAIGNS}`, { method: 'POST', data })
};
