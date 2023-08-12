import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

// safe area context
import { SafeAreaProvider } from 'react-native-safe-area-context';
// custom weather context
import { WeatherContext } from './components/WeatherContext';

// react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// custom fonts
import { useFonts } from 'expo-font';

// react native elements theme
import { ThemeProvider } from '@rneui/themed';
import { WeonTheme } from './theme/WeonTheme';

// screens
import HomeScreen from './screens/HomeScreen'
import FashionScreen from './screens/FashionScreen';
import DashboardScreen from './screens/DashboardScreen';

// Custom Icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createMaterialBottomTabNavigator();

export default function App() {

  // state variables
  const [error, setError] = useState(null);
  const [currentIsLoaded, setCurrentIsLoaded] = useState(false);
  const [forecastIsLoaded, setForecastIsLoaded] = useState(false);
  const [currentResult, setCurrentResult] = useState([]);
  const [forecastResult, setForecastResult] = useState([]);

  // Vancouver latitude & longitude
  const lat= process.env.EXPO_PUBLIC_LAT;
  const lon = process.env.EXPO_PUBLIC_LON;
  // OpenWeather API key
  const apiKey = process.env.EXPO_PUBLIC_API_KEY;

  // current weather endpoint
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  // weather forecast endpoint
  const forecastWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  useEffect(() => {
    // fetch current weather
    fetch(currentWeatherUrl)
        .then(res => res.json())
        .then((currentResult) => {
            // store current weather data
            setCurrentIsLoaded(true);
            setCurrentResult(currentResult);
            // console.log(currentResult);
        })
        
        // fetch forecast weather
        .then(() => {
          return fetch(forecastWeatherUrl);
        })
        .then(res => res.json())
        .then((forecastResult) => {
            // store forecast weather data
            setForecastIsLoaded(true);
            setForecastResult(forecastResult);
            // console.log(forecastResult);
        })

        // error handling
        .catch((error) => {
            setError(error);
        })
        
  }, []);

  // hook to load custom fonts
  let [fontsLoaded] = useFonts({
    'poppins-r': require('./assets/fonts/poppins-regular.ttf'),
    'poppins-m': require('./assets/fonts/poppins-medium.ttf'),
    'manrope-xb': require('./assets/fonts/manrope-extraBold.ttf'),
    'itc-aggp-b': require('./assets/fonts/itc-avant-garde-gothic-pro-bold.ttf'),
  });

  // conditional to show a spinner while fonts are loading
  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' color='#A4758E' />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <WeatherContext.Provider value={{error, currentIsLoaded, forecastIsLoaded, currentResult, forecastResult}}>
        <ThemeProvider theme={WeonTheme} >
          <NavigationContainer>
            <Tab.Navigator initialRouteName='Home' >

              <Tab.Screen 
                name='Fashion' 
                component={FashionScreen} 
                options={{
                  tabBarIcon:({ color, size}) => (
                    <MaterialCommunityIcons name='tshirt-crew' color='#39404F' size={25} />
                  ),
                }}
              />

              <Tab.Screen 
                name='Home' 
                component={HomeScreen}
                options={{
                  tabBarIcon:({ color, size }) => (
                    <MaterialCommunityIcons name='cloud' color='#39404F' size={25} />
                  )
                }}
              />

              <Tab.Screen
                name='Dashboard'
                component={DashboardScreen} 
                options={{
                  tabBarIcon:({ color, size}) => (
                    <MaterialCommunityIcons name='view-dashboard' color='#39404F' size={25} />
                  )
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </WeatherContext.Provider>
    </SafeAreaProvider>
  );
  
}

const styles = StyleSheet.create({
  // style for spinner
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#FFFBEF',
  },
});