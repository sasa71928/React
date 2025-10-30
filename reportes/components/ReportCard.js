import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ReportCard({ report }) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' }}
          style={styles.avatar}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{report.name}</Text>
          <Text style={styles.location}>{report.location}</Text>
        </View>
        <Text style={styles.time}>{report.time}</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image source={{ uri: report.image }} style={styles.image} />
        <Text style={styles.imageText}>Imagen del reporte</Text>
      </View>

      <Text style={styles.description}>{report.description}</Text>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.button}>
          <Text>👍 Me gusta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>💬 Comentar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>📤 Compartir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  location: {
    color: '#555',
  },
  time: {
    color: '#777',
    fontSize: 12,
  },
  imageContainer: {
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },
  imageText: {
    color: '#777',
  },
  description: {
    fontSize: 15,
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
});
