import { StyleSheet, View, Image } from 'react-native';
import { ScrollView } from 'react-native-web';
import { Text } from '@rneui/themed';

import Header from '../components/Header';

export default function DashboardScreen() {
  return (
    <>
      <Header></Header>
      <View style={styles.container}>
      <ScrollView>
        {/* Section Top */}
        <View style={styles.sectionTop}>
          {/* The weather photo */}
          <View style={styles.weatherContainer}>
            <Image style={styles.topWeatherImg} source={require('../assets/sun.png')} />
          </View>

          {/* Temperature */}
          <View style={styles.weatherContainer}>
            <Text h3>Sunny</Text>
            <Text h1>26°</Text>
          </View>
        </View>
        
        {/* Forecast */}
        <View style={styles.forecastContainer}>

          {/* Day 1 */}
          <View style={styles.forecastContent}>
            <Text h4>Date</Text>
            <Image style={styles.forecastWeatherImg} source={require('../assets/rain.png')} />
            <Text h2>26°</Text>
          </View>

          {/* Day 2 */}
          <View style={styles.forecastContent}>
            <Text h4>Date</Text>
            <Image style={styles.forecastWeatherImg} source={require('../assets/clouds.png')} />
            <Text h2>26°</Text>
          </View>

          {/* Day 3 */}
          <View style={styles.forecastContent}>
            <Text h4>Date</Text>
            <Image style={styles.forecastWeatherImg} source={require('../assets/wind.png')} />
            <Text h2>26°</Text>
          </View>

          {/* Day 4 */}
          <View style={styles.forecastContent}>
            <Text h4>Date</Text>
            <Image style={styles.forecastWeatherImg} source={require('../assets/snow.png')} />
            <Text h2>26°</Text>
          </View>

          {/* Day 5 */}
          <View style={styles.forecastContent}>
            <Text h4>Date</Text>
            <Image style={styles.forecastWeatherImg} source={require('../assets/storm.png')} />
            <Text h2>26°</Text>
          </View>

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
    </>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: '#FAF8DA',
    borderColor: '#F9F3C5',
    borderWidth: 4,
    borderRadius: 30,
    margin: 15,
  },
  
  forecastContent: {
    // flexDirection: 'column',
    paddingHorizontal: 15,
    justifyContent: 'center',
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