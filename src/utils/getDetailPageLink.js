import { DetailPage } from 'constants/paths';

import { getUrl } from 'utils/getUrl';

export const getDetailPageLink = (data) => getUrl(DetailPage.path, { id: data.id });
