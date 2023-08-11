import { StyleSheet, View, Text, } from 'react-native';
// import { SearchBar } from '@rneui/themed';

// Custom Icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header() {
  return (
    <View style={styles.container}>
      {/* <Text>Header</Text> */}
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons name="map-marker" color="#9B9132" size={40} />
        <View style={styles.headerInfo}>
          <Text style={styles.date}>Date</Text>
          <Text style={styles.location}>Location</Text>
        </View>
        <MaterialCommunityIcons name="account" color="#9B9132" size={40} />
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
    fontFamily: 'Poppins',
    fontWeight: 400,
  },

  location: {
    color: '#9B9132',
    fontSize: 36,
    fontFamily: 'ITC Avant Garde Gothic Pro',
    fontWeight: 700,
  }
});