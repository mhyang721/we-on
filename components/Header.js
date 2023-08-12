import { useContext } from 'react';
import { StyleSheet, View, Text, } from 'react-native';
// import { SearchBar } from '@rneui/themed';

// custom weather context
import { WeatherContext }  from '../components/WeatherContext';

// Custom Icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header() {

  const {currentResult} = useContext(WeatherContext);
    
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons name='map-marker' color='#9B9132' size={40} />
        <View style={styles.headerInfo}>
          <Text style={styles.date}>{formatDate(Date.now())}</Text>
          <Text style={styles.location}>{currentResult.name}</Text>
        </View>
        <MaterialCommunityIcons name='account' color='#9B9132' size={40} />
      </View>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFBEF',
    padding: 20,
    paddingVertical: 60,
  },

  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: 350,
  },

  headerInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 35,
  },

  // Header's Date and Location
  date: {
    color: '#9B9132',
    fontSize: 16,
    fontFamily: 'poppins-r',
    // fontWeight: 400,
  },

  location: {
    color: '#9B9132',
    fontSize: 36,
    fontFamily: 'itc-aggp-b',
    // fontWeight: 700,
  }
});