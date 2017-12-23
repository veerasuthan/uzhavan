/**
 * @Author: GVEDAS
 * @Date:   2017-12-23T16:59:00+05:30
 * @Email:  gvedas@gvedas.com
 * @Last modified by:   GVEDAS
 * @Last modified time: 2017-12-23T17:00:12+05:30
 */
import { ADD_NAME } from './types';

export const addName = (name) => {
  return {
    type: ADD_NAME,
    payload: name,
 };
};
