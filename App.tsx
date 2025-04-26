import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GoogleButton from './GoogleButton';


export default function App() {
  return (
    <View style={styles.container}>
    <GoogleButton onPress={() => console.log('Login com Google clicado!')} />
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#499',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
