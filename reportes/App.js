import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';
import ReportCard from './components/ReportCard';

export default function App() {
  const reports = [
    {
      id: '1',
      name: 'Ana García',
      location: 'Centro de la ciudad',
      time: 'Hace 2 horas',
      description: 'Problema con el alumbrado público en la calle principal',
      image: 'https://emojicdn.elk.sh/📸',
    },
    {
      id: '2',
      name: 'Carlos Mendoza',
      location: 'Parque Central',
      time: 'Hace 4 horas',
      description: 'Basura acumulada en los contenedores del parque',
      image: 'https://emojicdn.elk.sh/🌳',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Feed de Reportes</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+ Agregar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={reports}
        renderItem={({ item }) => <ReportCard report={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
