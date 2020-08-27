import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WeatherDashboard from '../screens/WeatherDashboard';
import WeatherDetail from '../screens/WeatherDetail';
import AppColor from '../util/AppColor';
import Config from "react-native-config";
const Stack = createStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Dashboard"
                    component={WeatherDashboard}
                    options={{
                        title: Config.enviroment_type,
                        headerStyle: {
                            backgroundColor: AppColor.navBackgroundColor,
                        },
                        headerTintColor: AppColor.navTintColor,
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
                <Stack.Screen name="WeatherDetail"
                    component={WeatherDetail}
                    options={{
                        title: 'Weather Detail',
                        headerStyle: {
                            backgroundColor: AppColor.navBackgroundColor,
                        },
                        headerTintColor: AppColor.navTintColor,
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;