import { StyleSheet, Text, View } from 'react-native';
import Formulario from './components/Formulario';


export default function App() {
  return (
    <View style={styles.container}>
      <Formulario />
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 110,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
