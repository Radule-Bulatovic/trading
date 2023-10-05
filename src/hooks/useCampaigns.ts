import { useMutation, useQuery, useQueryClient } from 'react-query';

import { campaign } from '../api/campaign';

export function useCreateCampaign() {
  const queryClient = useQueryClient();

  const createCampaignMutation = useMutation(campaign.create, {
    onSuccess: () => {
      queryClient.invalidateQueries('campaigns');
    }
  });

  const createCampaign = async (campaignData: any) => {
    try {
      await createCampaignMutation.mutateAsync(campaignData);
    } catch (error) {
      console.error('Error creating campaign:', error);
    }
  };

  return createCampaign;
}

export function useFetchCampaigns() {
  return useQuery(['campaigns'], campaign.all);
}
