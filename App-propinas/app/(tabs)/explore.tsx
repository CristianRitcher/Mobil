import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function CustomTipScreen() {
  const [customTip, setCustomTip] = useState('');
  const router = useRouter();

  const saveCustomTip = async () => {
    const value = parseFloat(customTip);
    if (isNaN(value) || value <= 0) {
      Alert.alert('Invalid input', 'Please enter a valid percentage greater than 0');
      return;
    }

    try {
      await AsyncStorage.setItem('customTip', value.toString());
      Alert.alert('Saved!', `Custom tip of ${value}% saved.`);
      router.replace('/');
    } catch (error) {
      console.error('Error saving tip:', error);
      Alert.alert('Error', 'Could not save the tip.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set your <Text style={styles.bold}>Custom Tip</Text></Text>

      <TextInput
        style={styles.input}
        placeholder="Enter tip %"
        keyboardType="numeric"
        value={customTip}
        onChangeText={setCustomTip}
      />

      <TouchableOpacity style={styles.saveButton} onPress={saveCustomTip}>
        <Text style={styles.saveButtonText}>Save Tip</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => router.replace('/')}>
        <Text style={styles.backButtonText}>← Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
    color: '#00bfa6',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
    width: '100%',
    textAlign: 'center',
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  saveButton: {
    backgroundColor: '#00bfa6',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  backButton: {
    marginTop: 10,
  },
  backButtonText: {
    color: '#555',
    fontSize: 16,
  },
});