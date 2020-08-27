import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    SectionList,
    ActivityIndicator,
    TouchableOpacity
} from "react-native";
import AppStyle from '../AppStyle';
import AppConstant from '../AppConstant';
import moment from "moment";

const WeatherListView = (props) => {
    //console.log(props.wData);
    const Item = ({ item }) => (
        <View style={AppStyle.itemContainer}>
            <TouchableOpacity style={{flexDirection: 'row' ,width:'100%'}} onPress={() => {
                props.goToWeatherDetail(item);
            }}>
                <Image
                    style={{ width: 80, height: 80, resizeMode: 'cover' }}
                    source={{ uri: 'http://openweathermap.org/img/wn/' + item.weather[0].icon + '@2x.png' }}
                />
                <View style={AppStyle.item}>
                    <Text style={{ fontSize: 20, textAlign: 'left' }}>{moment(item.dt_txt, 'YYYY-MM-DD h:mm:ss').format('h:mm a')}</Text>
                    <Text style={AppStyle.temp}>{parseFloat(item.main.temp - 273.15).toFixed(2)}°C</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
   
    if (props.wData == null) {
        return (
            <SafeAreaView>
                <View style={{ flex: 1, padding: 20  }}>
                    <ActivityIndicator />
                </View>
            </SafeAreaView>
        )
    }
    return (
        <>
            <SafeAreaView style={AppStyle.weatherListContainer}>
                <SectionList
                    sections={props.wData}
                    keyExtractor={(item) => item.dt_txt}
                    renderItem={({ item }) => <Item item={item} />}
                    renderSectionHeader={({ section }) => (
                        <View style={AppStyle.header}>
                            <Text style={AppStyle.title}>
                                {moment(section.key, 'YYYY-MM-DD h:mm:ss').format('MMMM Do YYYY')}
                            </Text>
                        </View>)
                    }
                />
            </SafeAreaView>
        </>
    );
};

export default WeatherListView;
