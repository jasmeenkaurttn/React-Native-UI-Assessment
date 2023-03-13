import {SELECT_CHANNEL} from './constants';

export const selectChannel = id => {
  return {
    type: SELECT_CHANNEL,
    payload: {
      id,
    },
  };
};