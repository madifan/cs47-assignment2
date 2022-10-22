import { StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import { Themes } from '../../assets/Themes';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;


export default function AudioCard () {
    return (
      <View style={[styles.audioContainer, styles.shadowProp]}>
        <Text style={styles.audioText}> My hottest take</Text>
        <View style={styles.iconContainer}>
          <Image source={require('../../assets/Icons/player_light.png')} style={styles.playButton}/>
          <Image source={require('../../assets/Icons/audio_waveform_light.png')} style={styles.audioProgress}/>
        </View>
      </View>
    )
}

const styles = StyleSheet.create ({
  shadowProp: {
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowOffset: Themes.light.shadows.shadowOffset,
    shadowRadius: Themes.light.shadows.shadowRadius,
  },

  audioContainer: { 
    backgroundColor:Themes.light.bgSecondary,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 32,
    padding: 24,
    justifyContent: 'center',
    width: (windowHeight * 0.44)/1.1
  
  },
  audioText: {
    fontFamily: 'Sydney',
    fontSize: windowHeight * 0.028,
    color: Themes.light.text,
  },
  iconContainer: {
    width: '100%',
    height: windowWidth * 0.08,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: windowWidth * 0.06,
    marginBottom: windowWidth * 0.06,
  },
  playButton: {
    flex: 0.8,
    resizeMode: 'contain',
    marginRight: windowWidth * 0.02,
  },
  audioProgress: {
    flex: 4,
    resizeMode: 'contain',
  }


})