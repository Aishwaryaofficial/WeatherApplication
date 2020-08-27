
// import mockStore from 'redux-mock-store';
// import { fetchWeather,fetchWeatherData, noInternetError } from '../Store/Actions/index';
// import { REQUEST_API_DATA,RECEIVE_API_DATA} from '../util/AppConstant';
// import weatherReducer from '../redux/reducers/weatherReducer';
// import { shallow,configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import configureStore from 'redux-mock-store';
// i//mport sa from 'redux-sa';

// const weatherArr = [
//     {
//      "key":"2020-05-11 18:00:00",
//      "data":{"dt":1589220000,"main":{"temp":305.15,"feels_like":301.8,"temp_min":305.15,"temp_max":306.2,"pressure":1007,"sea_level":1007,"grnd_level":983,"humidity":37,"temp_kf":-1.05},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":55},"wind":{"speed":7.34,"deg":314},"rain":{"3h":0.32},"sys":{"pod":"n"},"dt_txt":"2020-05-11 18:00:00"}
//     }
//  ]
//  const initialState = {
//     zipcode:'110043',
//     weatherData:weatherArr,
//     cityData:{"name":"Daulatpur","coord":{"lat":28.5466,"lon":76.9593},"country":"IN","timezone":19800,"sunrise":1589155436,"sunset":1589203992},
//     isLoading:false,
//     error:null
// }

// describe('Testing weather', () => {  
//     configure({adapter: new Adapter()});
//     const middlewares = [ReduxThunk]; // you can mock any middlewares here if necessary
//     const mockStore = configureStore(middlewares)();
  
//   beforeEach(() => {
//     mockStore.clearActions();
//   });

//   it('attempt with correct action succeeds', async () => {
//     await mockStore.dispatch(fetchWeatherData('302017','IN')).catch((error) => {
//         const errorObject = { ...error };
//         delete errorObject.duration;
//         expect(errorObject).toMatchSnapshot();
//     });
//     await mockStore.dispatch(fetchWeatherData('121','IN'));
//     mockStore.dispatch(noInternetError('404', '302017'));
//     //expect(mockStore.getActions()).toMatchSnapshot();
//   });
// });

// describe('Testing reducers after weather action', () => {  
//     it('set weather to initial state', () => {
//       expect(weatherReducer(initialState, { type: FETCH_WEATHER })).toMatchSnapshot();
//       expect(weatherReducer(initialState, { type: SET_ZIPCODE })).toMatchSnapshot();
//       expect(weatherReducer(initialState, { type: IS_LOADING })).toMatchSnapshot();
//       expect(weatherReducer(initialState, { type: IS_ERROR })).toMatchSnapshot();
//       expect(weatherReducer(initialState, { type: NO_INTERNET })).toMatchSnapshot();
//       expect(weatherReducer(initialState, { type: FETCH_CITY })).toMatchSnapshot();
//     });
//   });