import { INCREMENT, DECREMENT } from 'store/actionTypes/actionTypes';

export const increment = () {
  return {
    type: INCREMENT
  };
};

export const decrement = () {
  return {
    type: DECREMENT
  };
};
