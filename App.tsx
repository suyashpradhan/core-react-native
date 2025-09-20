import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider >
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <Image source={{uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg'}} style={styles.image}/>
      <Image source={require('./assets/adaptive-icon.png')} style={styles.logo} />
      <Text style={styles.text}> Hello World!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
alignItems:'center',  
},
  logo: {
    width: 150,
    height: 150,
    borderWidth: 5,
    borderColor: 'white',
    marginTop: -75,
    borderRadius:100
  },
  image:{
    width: '100%',
    aspectRatio: 16/9,
  },
  text:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  }
});
