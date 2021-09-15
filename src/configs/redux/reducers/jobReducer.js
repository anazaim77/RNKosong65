import types from '../actions/types';

const initialState = {
  list: {
    data: [],
    meta: {page: 1},
  },
  current: {},
};

export const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.job.LIST_RD:
      return {
        ...state,
        list: {
          ...state.list,
          ...action.payload,
          //   data: [...state.list.data, ...action.payload.data],
          //   meta: action.payload.meta,
        },
      };
    case types.job.CURRENT_RD:
      return {...state, current: action.payload};
    default:
      return state;
  }
};
