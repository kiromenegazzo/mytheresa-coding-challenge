import { callApi, fetchItem, fetchList } from 'utils/api';

export const getQueryListProps = (query) => ({
  queryKey: ['movieList', query],
  queryFn: () => callApi(fetchList, query),
});

export const getQueryItemProps = (id) => ({
  queryKey: ['movie', id],
  queryFn: () => callApi(fetchItem, id),
});
