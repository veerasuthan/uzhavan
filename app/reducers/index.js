/**
 * @Author: GVEDAS
 * @Date:   2017-12-23T16:44:21+05:30
 * @Email:  gvedas@gvedas.com
 * @Last modified by:   GVEDAS
 * @Last modified time: 2017-12-23T17:18:22+05:30
 */
import { combineReducers } from 'redux';
import app from './app';

export default combineReducers({
  names: app,
});
