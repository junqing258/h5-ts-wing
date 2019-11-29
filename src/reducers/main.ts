import { createActions, handleActions, combineActions } from 'redux-actions';

import { increment, decrement, reset } from '../actions/index';

import * as ActionType from '../actions/actionTypes';

export type IState = {
  counter: number;
};

export type IAction = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
};

const defaultState: IState = { counter: 10 };

const mainReducer = handleActions(
  {
    [ActionType.INCREMENT]: (state: IState, action: IAction): IState => {
      const {
        payload: { amount },
      } = action;
      return { ...state, counter: state.counter + amount };
    },
    [ActionType.DECREMENT]: (state: IState, action: IAction): IState => {
      const {
        payload: { amount },
      } = action;
      return { ...state, counter: state.counter - amount };
    },
    [ActionType.RESET]: (state: IState, action: IAction): IState => {
      const { payload } = action;
      return { ...state, counter: payload };
    },
  },
  defaultState,
);

export { mainReducer };
