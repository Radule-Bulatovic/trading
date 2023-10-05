import { useRoutes } from 'react-router-dom';

import { Layout } from '../components/Templates/Layout';

import { publicRoutes } from './public';

export const AppRoutes = () => useRoutes([{ element: <Layout />, children: [...publicRoutes] }]);
