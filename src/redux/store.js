import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';
import myReducers from './reducers/myReducers';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//creating persisted config
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}
const persistedReducer = persistReducer(persistConfig, myReducers);

export const AppStore = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

export const AppPersistor = persistStore(AppStore);

// then run the saga
sagaMiddleware.run(mySaga);