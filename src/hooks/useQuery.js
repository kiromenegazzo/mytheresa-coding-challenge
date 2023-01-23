import { useQuery } from '@tanstack/react-query';

import { getQueryListProps, getQueryItemProps } from 'utils/getQueryProps';

export const useListQuery = (query, options) => useQuery({
  ...options,
  ...getQueryListProps(query),
  select: (response) => (response?.results || []),
});

export const useItemQuery = (id, options) => useQuery({
  ...options,
  ...getQueryItemProps(id),
});
