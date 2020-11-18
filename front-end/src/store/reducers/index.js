import { combineReducers } from 'redux';
import ContactReducer from './contact';

const rootReducer = combineReducers({
    contact: ContactReducer
});

export default rootReducer;