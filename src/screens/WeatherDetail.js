import React, { useState, useEffect } from 'react';
import { View, Text, Image, _ScrollView, ScrollView } from 'react-native';
import AppStyle from '../util/AppStyle';

const WeatherDetail = (props) => {

  const weatherInfo = props.route.params.weatherData;
  const wIcon = 'http://openweathermap.org/img/wn/' + weatherInfo.weather[0].icon + '@2x.png'

  return (
    <>

      <View style={{ padding: 0 }}>

        <View style={{ flexDirection: 'row', backgroundColor: 'grey' }}>
          <Image
            style={{ width: 80, height: 80, resizeMode: 'cover' }}
            source={{ uri: wIcon }}
          />
          <View style={{ flexDirection: 'column', paddingTop: 13 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>{weatherInfo.weather[0].description}</Text>
            <Text style={{ fontSize: 14, color: 'white' }}>{weatherInfo.weather[0].main}</Text>
          </View>

        </View>
        <ScrollView >
          <View style={AppStyle.detailOuterComtainer}>
            <View style={AppStyle.detailInnerContainer}>
              <Text style={AppStyle.detailTextTitle}>temp</Text>
              <Text style={AppStyle.detailTextDesc}>: {weatherInfo.main['temp'].toFixed(1)}°C</Text>
            </View>
            <View style={AppStyle.detailInnerContainer}>
              <Text style={AppStyle.detailTextTitle}>Minimum Temprature</Text>
              <Text style={AppStyle.detailTextDesc}>: {weatherInfo.main.temp_min.toFixed(1)}°C</Text>
            </View>
            <View style={AppStyle.detailInnerContainer}>
              <Text style={AppStyle.detailTextTitle}>Maximum Temprature</Text>
              <Text style={AppStyle.detailTextDesc}>: {weatherInfo.main.temp_max.toFixed(1)}°C</Text>
            </View>
          </View>
          <View style={AppStyle.detailOuterComtainer}>
            <View style={AppStyle.detailInnerContainer}>
              <Text style={AppStyle.detailTextTitle}>Humidity: </Text>
              <Text style={AppStyle.detailTextDesc}>{weatherInfo.main.humidity}%</Text>
            </View>
            <View style={AppStyle.detailInnerContainer}>
              <Text style={AppStyle.detailTextTitle}>Speed: </Text>
              <Text style={AppStyle.detailTextDesc}>{weatherInfo.wind.speed.toFixed(1)} m/s</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default WeatherDetail;
