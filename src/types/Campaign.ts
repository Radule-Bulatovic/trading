import { WeekStats } from './WeekStats';

export interface Campaign {
  id: string;
  name: string;
  installs: WeekStats;
}
