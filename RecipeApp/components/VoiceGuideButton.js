import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as Speech from 'expo-speech';

export default function VoiceGuideButton({ text }) {
  const speak = () => Speech.speak(text);

  return (
    <TouchableOpacity style={styles.button} onPress={speak}>
      <Text style={styles.label}>🎤 Voice Guide</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ff6347',
    padding: 12,
    borderRadius: 8,
    marginVertical: 10
  },
  label: { color: '#fff', fontWeight: 'bold' }
});