/**
 * @Author: GVEDAS
 * @Date:   2017-12-23T16:45:56+05:30
 * @Email:  gvedas@gvedas.com
 * @Last modified by:   GVEDAS
 * @Last modified time: 2017-12-23T16:57:48+05:30
 */
import config from '../config';
import { ADD_NAME } from '../actions/types';

const initialState = [...config.names];
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_NAME:
      return [...state, action.payload];
    default: return state;
  }
}
