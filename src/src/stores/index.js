import { combineReducers } from 'redux';
import auth from './accounts/reducers/AuthReducer';

export default combineReducers({
    auth
});
