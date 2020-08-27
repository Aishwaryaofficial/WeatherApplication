import React ,{useState ,useEffect, useRef} from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import AppStyle from '../util/AppStyle';
import ZipInputView from '../util/component/ZipInputView';
import WeatherListView from '../util/component/WeatherListView';
import fetchData from '../networking/WeatherApi';
import { useDispatch,useSelector } from 'react-redux';
import actions, { requestApiData } from '../redux/actions/actions';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import * as AppConstant from '../util/AppConstant';

const WeatherDashboard = ({ navigation }) => {

  //const [countryCode, setCountryCode] = useState('IN');  // Store `Country Code` 
  const [errors, setError] = useState({}); // Store error data from the backend here
  const dispatch = useDispatch(); // tigger the  action 
  const weatherData = useSelector(state => state.weather);

 // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    Geolocation.getCurrentPosition((info) => { 
      console.log('latitude');
      console.log(info.coords.latitude);
      console.log('longitude');
      console.log(info.coords.longitude);
    });
});

  const onSubmitHandler = (enteredText) => {
    dispatch(requestApiData(enteredText));
  };
  const onWeatherDetailHandler = (data) => {
    navigation.navigate('WeatherDetail', { weatherData: data })
  };

  return (
    <>
      <View style={AppStyle.container}>
        <ZipInputView
          onClick={onSubmitHandler}
        />
        <WeatherListView
        wData={weatherData} 
        goToWeatherDetail ={onWeatherDetailHandler}/>
      </View>
    </>
  );
};

export default WeatherDashboard;
