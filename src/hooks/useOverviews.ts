import { useQuery } from 'react-query';

import { overview } from '../api/overview';

export function useFetchOverview() {
  return useQuery(['overview'], overview.all);
}
