import { StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import { Themes } from '../../assets/Themes';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

export default function Footer () {
    return (
        <View style = {styles.actionBar}>
          <View style={styles.actionItem}> 
            <Image source={require('../../assets/Icons/discover_light.png')} style={styles.actionIcon}/>
            <Text style={styles.actionText}>Discover</Text>
          </View>
          <View style={styles.actionItem}> 
            <Image source={require('../../assets/Icons/heart_light.png')} style={styles.actionIcon}/>
            <Text style={styles.actionText}>Matches</Text>
          </View>
          <View style={styles.actionItem}> 
            <Image source={require('/Users/madison.fby/Documents/Stanford/2022-2023/Fall/CS 47/Assignment 2/cs47-a2-starter-main/assets/Icons/messages_light.png')} style={styles.actionIcon}/>
            <Text style={styles.actionText}>DMs</Text>
          </View>
      </View>
    )   
}

const styles = StyleSheet.create ({
    actionBar: { //TODO: Why does mine not look completely centered??
        width: '100%',
        flexDirection: 'row',
        height: windowHeight * 0.12,  
        backgroundColor:Themes.light.navigation,
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignContent: 'center',
    },
    actionIcon: {
        height: windowWidth * 0.09,
        width: windowWidth * 0.09,
        resizeMode: 'contain',
    },
    actionItem:{
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:windowWidth * 0.08,
        marginRight:windowWidth * 0.08,
    },
    actionText:{
        fontFamily: 'Sydney',
        fontSize: windowHeight * 0.024,
        color: Themes.light.textSecondary,
    },
})