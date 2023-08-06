import * as React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

// safe area context
import { SafeAreaProvider } from 'react-native-safe-area-context';

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


const Tab = createMaterialBottomTabNavigator();

export default function App() {

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
        <ActivityIndicator size='large' color='#b9c8ff' />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={WeonTheme} >
        <NavigationContainer>
          <Tab.Navigator initialRouteName="Home" >
            <Tab.Screen name="Fashion" component={FashionScreen} />
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Dashboard" component={DashboardScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
  
}

const styles = StyleSheet.create({
  // style for spinner
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
});