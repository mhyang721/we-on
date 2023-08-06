import { StyleSheet, View } from 'react-native';
import { Button, Text } from '@rneui/themed';

import Header from '../components/Header';

export default function HomeScreen() {
  return (
    <>
      <Header></Header>
      <View style={styles.container}>
        <Text h1>Text H1</Text>
        <Text h2>Text H2</Text>
        <Text h3>Text H3</Text>
        <Text h4>Text H4</Text>
        <Text>Text p</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },

});