import { Alert, Button, StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Primera App de Oscar</Text>
      
      {/* Botón */}
      <Button
        title="Presióname"
        onPress={() => Alert.alert('Presionaste el boton de Oscar')}
      />
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,                 
    justifyContent: 'center', 
    alignItems: 'center',     
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
