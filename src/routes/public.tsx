import { Navigate } from 'react-router-dom';

import { CampaignCreate } from '../components/Pages/CampaignCreate';
import { Campaigns } from '../components/Pages/Campaigns';
import { XAUUSD } from '../components/Pages/XAUUSD';
import { ROUTES } from '../constants';

export const publicRoutes = [
  { path: ROUTES.OVERVIEW, element: <XAUUSD /> },
  { path: ROUTES.CAMPAIGNS.LIST, element: <Campaigns /> },
  { path: ROUTES.CAMPAIGNS.CREATE, element: <CampaignCreate /> },
  { path: '*', element: <Navigate to={ROUTES.OVERVIEW} /> }
];
