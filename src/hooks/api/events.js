import { fetchWithRedirect } from '../../utils/fetchWithRedirect';
import { useAuthenticatedQuery } from './useAuthenticatedQuery';
import { formatDate } from '../../utils/formatDate';

const getEventsToModerate = async (key, { headers, ...queryData }) => {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/events/`);
  url.search = new URLSearchParams({
    ...queryData,
    availableFrom: formatDate(new Date()),
  }).toString();
  const res = await fetchWithRedirect(url, {
    headers,
  });
  return await res.json();
};

const useGetEventsToModerate = (searchQuery, config) =>
  useAuthenticatedQuery(
    [
      'events',
      {
        q: searchQuery,
        audienceType: 'everyone',
        availableTo: '*',
        limit: 1,
        start: 0,
        workflowStatus: 'READY_FOR_VALIDATION',
      },
    ],
    getEventsToModerate,
    {
      enabled: !!searchQuery,
      ...config,
    },
  );

export { useGetEventsToModerate };