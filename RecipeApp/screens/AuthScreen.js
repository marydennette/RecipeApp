// screens/AuthScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AuthScreen({ navigation }) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Handle registration
  const handleRegister = async () => {
    if (!username || !password) {
      Alert.alert('Please fill in all fields');
      return;
    }

    try {
      const existingUser = await AsyncStorage.getItem(username);
      if (existingUser) {
        Alert.alert('Username already exists');
        return;
      }

      await AsyncStorage.setItem(username, JSON.stringify({ username, password }));
      Alert.alert('Registration successful!', 'You can now log in.');
      setIsRegistering(false);
      setUsername('');
      setPassword('');
    } catch (error) {
      Alert.alert('Error', 'Something went wrong while registering.');
    }
  };

  // Handle login
  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Please enter your username and password');
      return;
    }

    try {
      const userData = await AsyncStorage.getItem(username);
      if (!userData) {
        Alert.alert('User not found');
        return;
      }

      const user = JSON.parse(userData);
      if (user.password === password) {
        Alert.alert('Login Successful!');
        navigation.navigate('Home'); // Go to HomeScreen after login
      } else {
        Alert.alert('Incorrect password');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong while logging in.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isRegistering ? 'Register' : 'Login'}</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />

      <View style={styles.buttonContainer}>
        <Button
          title={isRegistering ? 'Register' : 'Login'}
          onPress={isRegistering ? handleRegister : handleLogin}
        />
      </View>

      <Text
        style={styles.toggleText}
        onPress={() => setIsRegistering(!isRegistering)}
      >
        {isRegistering
          ? 'Already have an account? Log in'
          : "Don't have an account? Register"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 10,
  },
  toggleText: {
    color: '#007BFF',
    marginTop: 10,
  },
});
