import types from './types';

export const fetch_list_sg = payload => ({
  type: types.job.FETCH_SG,
  payload,
});
export const fetch_list_rd = payload => ({
  type: types.job.LIST_RD,
  payload,
});
export const fetch_detail_sg = payload => ({
  type: types.job.DETAIL_SG,
  payload,
});
export const fetch_detail_rd = payload => ({
  type: types.job.CURRENT_RD,
  payload,
});
