import { useContext } from 'react';
import { StyleSheet, View, Image, ScrollView, ActivityIndicator } from 'react-native';
import { Text, Card } from '@rneui/themed';

import Header from '../components/Header';

// custom weather context
import { WeatherContext }  from '../components/WeatherContext';

// const App = () => {
//   const [randomImage, setRandomImage] = React.useState('');
 
//   const renderImage = () => {
//       const Images = [
//         { image: '../assets/fashion-photo1.png' },
//         { image: '../assets/fashion-photo2.png' },
//         { image: '../assets/fashion-photo3.png' },
//         { image: '../assets/fashion-photo4.png' },
//       ];
//       const randomImageIndex = Math.floor(Math.random() * Math.floor(4));
//       return Images[randomImageIndex].image;
//   };    
  
//   React.useEffect(() => {
//       setRandomImage(renderImage);
//   });

//   return (
//         <>
//           <Header></Header>
//           <View style={styles.container}>
//             {/* temperture */}
//             <View style={styles.content}> 
//               <Text style={styles.h1}>26°</Text>
//               <Image style={styles.img} source={require('../assets/sun.png')} />
//             </View>
          
//             {/* Fashion suggestion gallery */}
//             <ScrollView horizontal={true} style={styles.wrapper}>
//               <View style={styles.cards}> 
//                 <Card>
//                   <Card.Content>
//                     <Text p> Test </Text>
//                   </Card.Content>
//                   <Card.Cover source={{ uri: renderImage() }} />
//                   <Image style={styles.fashionImg} source={require('../assets/fashion-photo1.png')} />
//                 </Card>
//               </View>
//             </ScrollView>
//           </View>
//         </>
//       );
// }

export default function FashionScreen() {

  const {
    error, 
    currentIsLoaded, 
    currentResult} = useContext(WeatherContext);

  return (
    <ScrollView>
      <Header></Header>
      {displayTemp(error, currentIsLoaded, currentResult)}
    </ScrollView>
  );
}

// display weather forecast data
function displayTemp(error, currentIsLoaded, currentResult) {
  
  if (error) {
    // show an error message
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  } 

  else if (!currentIsLoaded) {
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
        <Text>No weather forecast available</Text>
      </View>
    );
  }

  else {

    // use openweather default icons
    const currentWeatherImg = {uri: 'http://openweathermap.org/img/wn/'+ currentResult.weather[0].icon +'@4x.png'}

    return (
      <View style={styles.container}>
        {/* temperature */}
        <View style={styles.content}> 
          <Text style={styles.h1}>{Math.round(currentResult.main.temp)}°</Text>
          <Image style={styles.img} source={currentWeatherImg} />
        </View>
      
        {/* Fashion suggestion gallery */}
        <ScrollView horizontal={true} style={styles.wrapper}>
          <View style={styles.cards}> 
            <Card style={styles.cardStyle}>
              <Image style={styles.fashionImg} source={require('../assets/fashion-photo1.png')} />
            </Card>

            <Card style={styles.cardStyle}>
              <Image style={styles.fashionImg} source={require('../assets/fashion-photo2.png')} />
            </Card>

            <Card style={styles.cardStyle}>
              <Image style={styles.fashionImg} source={require('../assets/fashion-photo3.png')} />
            </Card>

            <Card style={styles.cardStyle}>
              <Image style={styles.fashionImg} source={require('../assets/fashion-photo4.png')} />
            </Card>

            <Card style={styles.cardStyle}>
              <Image style={styles.fashionImg} source={require('../assets/fashion-photo5.png')} />
            </Card>

            <Card style={styles.cardStyle}>
              <Image style={styles.fashionImg} source={require('../assets/fashion-photo6.png')} />
            </Card>
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
    backgroundColor: '#FFFBEF',
  },

  content: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 15,
    paddingTop: 0,
  },
  
  h1: {
    color: '#39404F',
    fontFamily: 'manrope-xb',
    fontSize: 48,
  },

  img: {
    width: 80,
    height: 80,
  },

  // Card CSS
  cards: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardStyle: {
    backgroundColor: '#F9F3C5',
    borderColor: '#F9F3C5'
  },

  fashionImg: {
    width: 308,
    height: 512,
  }

});

// export default App;