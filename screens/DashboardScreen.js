import { useContext } from 'react';
import { StyleSheet, View, Image, ScrollView, ActivityIndicator } from 'react-native';
import { Text } from '@rneui/themed';

import Header from '../components/Header';

// custom weather context
import { WeatherContext }  from '../components/WeatherContext';

export default function DashboardScreen() {

  const {
    error, 
    currentIsLoaded, 
    forecastIsLoaded, 
    currentResult, 
    forecastResult} = useContext(WeatherContext);

  return (
    <View style={styles.container}>
      {displayForecastWeather(error, currentIsLoaded, forecastIsLoaded, currentResult, forecastResult)}
    </View>
  );
 
}

// display weather forecast data
function displayForecastWeather(error, currentIsLoaded, forecastIsLoaded, currentResult, forecastResult) {
  
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

  else if (!forecastResult) {
    // not an error but no results, show a message
    return (
      <View>
        <Text>No weather forecast available</Text>
      </View>
    );
  }

  else {

    // format date in month/day format
    const formatDate = (datetimeString) => {
      const date = new Date(datetimeString);
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${month}/${day}`;
    }
    
    // calculate start index for tomorrow's forecast
    const currentDate = new Date();
    const tomorrow = new Date(currentDate);
    tomorrow.setDate(currentDate.getDate() + 1);
    // set minimum time to 5pm the next day (will draw 6pm daily data)
    tomorrow.setHours(17);

    let startIndex = -1;
    for (let i = 0; i < forecastResult.list.length; i++) {
      const forecastDate = new Date(forecastResult.list[i].dt_txt);
      if (forecastDate >= tomorrow) {
        startIndex = i;
        break;
      }
    }

    // if unable to show the next day's data
    if (startIndex === -1) {
      return (
        <View>
          <Text>No weather forecast available</Text>
        </View>
      );
    }

    // display 5-day forecast starting from tomorrow
    const forecastData = [];
    for (let i = startIndex; i < startIndex + 5 * 8; i += 8) {
      forecastData.push(forecastResult.list[i]);
      // console.log('Forecast Date:', forecastResult.list[i].dt_txt);
    }

    // use openweather default icons
    const currentWeatherImg = {uri: 'http://openweathermap.org/img/wn/'+ currentResult.weather[0].icon +'@4x.png'}
    
    return (
      <View style={styles.container}>
        <ScrollView>
          <Header></Header>
          {/* Section Top */}
          <View style={styles.sectionTop}>
            {/* The weather photo */}
            <View style={styles.weatherContainer}>
              <Image style={styles.topWeatherImg} source={currentWeatherImg} />
            </View>

            {/* Temperature */}
            <View style={styles.weatherContainer}>
              <Text h3 style={{textTransform: 'capitalize'}}>{currentResult.weather[0].description}</Text>
              <Text h1>{Math.round(currentResult.main.temp)}°</Text>
            </View>
          </View>
          
          {/* 5-Day Forecast */}
          <View style={styles.forecastContainer}>
            {forecastData.map((item) => (
              <View style={styles.forecastContent} key={item.dt_txt}>
                <Text h4>{formatDate(item.dt_txt)}</Text>
                <Image
                  style={styles.forecastWeatherImg}
                  source={{uri: 'http://openweathermap.org/img/wn/'+ item.weather[0].icon +'@4x.png'}}
                />
                <Text h2>{Math.round(item.main.temp)}°</Text>
                {/* date and time of each forecast item for troubleshooting: */}
                {/* <Text>{item.dt_txt}</Text> */}
              </View>
            ))}
          </View>

          {/* Section Bottom */}
          <View style={styles.sectionBottom}>
            {/* Fashion advise 1 */}
            <View style={styles.fashionContainer}>
              <Image style={styles.fashionImg} source={require('../assets/fashion-photo5.png')} />
            </View>

            {/* Fashion advise 2 */}
            <View style={styles.fashionContainer}>
              <Image style={styles.fashionImg} source={require('../assets/fashion-photo6.png')} />
            </View>
          </View>

        </ScrollView>
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

  // Section Container
  sectionTop: {
    flex: 1,
    flexDirection: 'row',
    minHeight: 'auto',
  },

  sectionBottom: {
    flex: 1,
    flexDirection: 'row',
    minHeight: 'auto',
  },
  
  // Top weather Containers
  weatherContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF8DA',
    borderColor: '#F9F3C5',
    borderWidth: 4,
    borderRadius: 30,
    padding: 10,
    margin: 10,
    width: 200,
    height: 200,
  },
  
  // Forecast containers
  forecastContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FAF8DA',
    borderColor: '#F9F3C5',
    borderWidth: 4,
    borderRadius: 30,
    margin: 15,
  },
  
  forecastContent: {
    flexDirection: 'column',
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Fashion container
  fashionContainer: {
    flex: 1,
    justifyContent: 'center',
    borderColor: '#F9F3C5',
    backgroundColor: '#FAF8DA',
    borderWidth: 4,
    borderRadius: 30,
    padding: 10,
    margin: 10,
    height: 211,
    overflow: 'hidden',
  },


  // images
  topWeatherImg: {
    width: 160,
    height: 160,
  },

  forecastWeatherImg: {
    width: 42,
    height: 42,
  },

  fashionImg: {
    width: 150,
    height: 191,
  }

});