import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement, reset } from '../../actions/index';
import * as ActionTypes from '../../actions/actionTypes';
import { IProps } from '../../components/types';

export interface IAboutProps extends IProps {
  counter: number;
}

export function About(props: IAboutProps) {
  const { dispatch } = props;

  const change = () => dispatch({ type: ActionTypes.CHANGE, payload: { amount: 2 } });

  return (
    <div className="app">
      <header className="app-header">
        <p>About {props.counter} and save to reload.</p>
        <p> {props.location.search} </p>
      </header>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>R</button>
      <button onClick={change}>Change</button>
    </div>
  );
}

const mapStateToProps = (state: any, ownProps: IAboutProps) => {
  return state.main;
};

export default connect(mapStateToProps)(About);
