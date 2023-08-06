import { StyleSheet, View, Text, } from 'react-native';

import Header from '../components/Header';

export default function HomeScreen() {
  return (
    <>
      <Header></Header>
      <View style={styles.container}>
        <Text h1>FashionScreen</Text>
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