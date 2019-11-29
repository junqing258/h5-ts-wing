import React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { increment, decrement, reset } from '../../actions/index';
import * as ActionTypes from '../../actions/actionTypes';

export function About(props: any) {
  const { dispatch } = props;
  return (
    <div className="app">
      <header className="app-header">
        <p>About {props.counter} and save to reload.</p>
        <p> {props.location.search} </p>
      </header>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>R</button>
      <button onClick={() => dispatch({ type: ActionTypes.CHANGE, payload: { amount: 2 } })}>Change</button>
    </div>
  );
}

const mapStateToProps = (state: any, ownProps: any) => {
  return state.main;
};
/* const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return { actions: bindActionCreators({ increment, decrement, reset }, dispatch) };
}; */

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(About);
