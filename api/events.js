export const findToModerate = (apiUrl, headers, fetch) => async (
  searchQuery,
  start = 0,
  limit = 1,
) => {
  const url = new URL(`${apiUrl}/events/`);
  url.search = new URLSearchParams({
    q: searchQuery,
    audienceType: 'everyone',
    availableFrom: new Date().toISOString().split('.')[0] + 'Z',
    availableTo: '*',
    limit,
    start,
    workflowStatus: 'READY_FOR_VALIDATION',
  }).toString();

  const res = await fetch(url, {
    headers: headers(),
  });
  return await res.json();
};