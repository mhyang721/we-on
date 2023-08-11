import { useContext } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
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
    <View style={styles.container}>
      <Header></Header>
      {displayCurrentWeather(error, currentIsLoaded, forecastIsLoaded, currentResult, forecastResult)}
    </View>
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
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text h2 style={{textTransform: 'capitalize'}}>{currentResult.weather[0].description}</Text>
          <Image style={styles.img} source={require('../assets/sun.png')} />
          <Text h1>{Math.round(currentResult.main.temp)}°</Text>
          <Text h4>Precipitation: {forecastResult.list[0].pop * 100}% </Text>
          <Text h4>Humidity: {currentResult.main.humidity}%</Text>
          {/* km/h = m/s * 3.6 */}
          <Text h4>Wind: {Math.round(currentResult.wind.speed * 3.6)} km/h</Text>
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