import { StyleSheet, Text, View, Image, Dimensions, Platform} from 'react-native';
import { Themes } from '../../assets/Themes';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

export default function Header () {
    return (
        <View style={styles.navBar}>
            <Image source={require('../../assets/Icons/menu_light.png')} style={styles.navIcon}/>
            <Text style={styles.logo}>ensom</Text>
            <Image source={require('../../assets/Icons/sun.png')} style={styles.navIcon}/> 
        </View>
    )
}

const styles = StyleSheet.create ({
    navBar: {
        width: '100%',
        flexDirection: 'row',
        height: Platform.OS === 'ios' ? 41 : 54,   
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: windowWidth * 0.01,
      },
      navIcon: {
        height: windowWidth * 0.1,
        width: windowWidth * 0.1,
        resizeMode: 'contain',
      },
      logo : {
        fontFamily: 'SydneyBold',
        fontSize: windowHeight * 0.04,
        color: Themes.light.text,
      },
})