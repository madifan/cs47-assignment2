import { StyleSheet, Text, View, Dimensions, ImageBackground } from 'react-native';
import { Themes } from '../../assets/Themes';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

export default function ProfileCard() {
    return (
      <View style={styles.shadowProp}>
        <View style = {styles.imageContainer}>    
        {/* // TODO: Why does this shadow not work here?? ^ */}
        <ImageBackground source={require('../../assets/Profiles/mtl.jpg')} resizeMode="cover" style={styles.image}>  
        </ImageBackground>
        <Text style={styles.headerText}>MTL</Text>
        <Text style={styles.distanceText}>2 miles away</Text>
        </View>
      </View>
      
    )
}

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowOffset: Themes.light.shadows.shadowOffset,
    shadowRadius: Themes.light.shadows.shadowRadius,
  },
  imageContainer: {
    height: windowHeight * 0.44,  
    aspectRatio: 1/1.1,
    margin: windowWidth * 0.02,
    overflow:'hidden',
    borderRadius: 8,
    
  },
  headerText: {
    fontFamily: 'Sydney',
    fontSize: windowHeight * 0.032,
    position: 'absolute',
    top: 12,
    start: 12,
    color: Themes.light.textSecondary,
  },
  distanceText: {
    fontFamily: 'Sydney',
    fontSize: windowHeight * 0.02,
    position: 'absolute',
    bottom: 12,
    start: 12,
    color: Themes.light.textSecondary,
  },
  image: {
    flex: 1,
    
  },
});