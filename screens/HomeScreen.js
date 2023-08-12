import { useContext } from 'react';
import { StyleSheet, View, ScrollView, ActivityIndicator } from 'react-native';
import { Text, Image } from '@rneui/themed';

import Header from '../components/Header';

// custom weather context
import { WeatherContext }  from '../components/WeatherContext';

export default function HomeScreen() {

  const {
    error, 
    currentIsLoaded, 
    forecastIsLoaded, 
    currentResult, 
    forecastResult} = useContext(WeatherContext);

  return (
    <ScrollView>
      <Header></Header>
      {displayCurrentWeather(error, currentIsLoaded, forecastIsLoaded, currentResult, forecastResult)}
    </ScrollView>
  );

}

// display current weather data
function displayCurrentWeather(error, currentIsLoaded, forecastIsLoaded, currentResult, forecastResult) {
  
  if (error) {
    // show an error message
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  } 

  else if (!currentIsLoaded || !forecastIsLoaded) {
    // show loading text
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' color='#A4758E' />
      </View>
    );
  }

  else if (!currentResult) {
    // not an error but no results, show a message
    return (
      <View>
        <Text>No current weather data available</Text>
      </View>
    );
    }

  else {

    // use openweather default icons
    let currentWeatherImg = null;
    if (currentResult && currentResult.weather && currentResult.weather[0]) {
      currentWeatherImg = { uri: 'http://openweathermap.org/img/wn/' + currentResult.weather[0].icon + '@4x.png' };
    }

    // windspeed calculations
    let windSpeed = null;
    if (currentResult && currentResult.wind) {
      {/* km/h = m/s * 3.6 */}
      windSpeed = Math.round(currentResult.wind.speed * 3.6);
    }

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          {currentResult && currentResult.weather && currentResult.weather[0] ? (
            <Text h2 style={{ textTransform: 'capitalize' }}>
              {currentResult.weather[0].description}
            </Text>
            ) : null
          }
          {currentWeatherImg ? <Image style={styles.img} source={currentWeatherImg} /> : null}
          {currentResult && currentResult.main ? (
            <Text h1>{Math.round(currentResult.main.temp)}°</Text>
            ) : null
          }
          {forecastResult && forecastResult.list && forecastResult.list[0] ? (
            <Text h4>Precipitation: {forecastResult.list[0].pop * 100}%</Text>
            ) : null
          }
          {currentResult && currentResult.main ? (
            <Text h4>Humidity: {currentResult.main.humidity}%</Text>
            ) : null
          }
          {windSpeed !== null ? (
            <Text h4>Wind: {windSpeed} km/h</Text>
            ) : null
          }
        </View>
      </View>
    );
  }
  
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

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFBEF',
    paddingBottom: 40,
  },

  content: {
    alignItems: 'left',
    paddingLeft: 20,
  },

  img: {
    width: 300,
    height: 300,
    justifyContent: 'center'
  }

});