import AppLoading from 'expo-app-loading';
import { StyleSheet, View, StatusBar, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';

// import ProfileCard from './app/components/ProfileCard';
// import AudioCard from './app/components/AudioCard';
// import NavigationBar from './app/components/NavigationBar';
// import ActionBar from './app/components/ActionBar';

import {Header, Footer, Body} from './app/components/index'

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    SydneyBold: require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */
  return (
    <View style={styles.container}>
      <View style={[styles.container, styles.padding]}>
        <Header/>
        <Body/>
      </View>
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: Themes.light.bg,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  body: {
    flex: 0.5,
    padding: 24,
    alignItems: 'center',
  },
  padding: {
    paddingTop: 48,
    padding: windowWidth * 0.05,
  }
});
