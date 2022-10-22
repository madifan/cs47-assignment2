import { StyleSheet, Text, View, Dimensions, ImageBackground } from 'react-native';
import ProfileCard from './ProfileCard';
import AudioCard from './AudioCard';

export default function Body () {
    return (
        <View style={styles.body}>
          <ProfileCard/>
          <AudioCard/>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
      flex: 0.5,
      padding: 24,
      alignItems: 'center',
    },
})