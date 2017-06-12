/**
 * Created by schang124 on 2017/05/24.
 */
import auth from './auth';
import nav from './nav';
import { combineReducers } from 'redux';

export default combineReducers({
    auth,
    nav
});