/**
 * @Author: GVEDAS
 * @Date:   2017-12-23T16:45:16+05:30
 * @Email:  gvedas@gvedas.com
 * @Last modified by:   GVEDAS
 * @Last modified time: 2017-12-23T17:12:36+05:30
 */
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

function logger({ getState }) {
  console.log('state before dispatch', getState());
  return next => action => {
    console.log('will dispatch', action)
    let returnValue = next(action)
    console.log('state after dispatch', getState());
    return returnValue;
  }
}

export default createStore(reducers, applyMiddleware(logger));
