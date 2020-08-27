import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';

const myReducers = combineReducers({
    weather: weatherReducer,
});

export default myReducers;