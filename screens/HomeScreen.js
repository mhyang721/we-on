import { StyleSheet, View } from 'react-native';
import { Text, Image } from '@rneui/themed';

import Header from '../components/Header';

export default function HomeScreen() {
  return (
    <>
      <Header></Header>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text h2>Sunny</Text>
          <Image style={styles.img} source={require('../assets/sun.png')} />
          <Text h1>26°</Text>
          <Text h4>Precipitation: 0% </Text>
          <Text h4>Humidity: 47%</Text>
          <Text h4>Wind: 16 km/h</Text>
        </View>
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