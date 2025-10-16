import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍳Recipe App</Text>
      <Text>Welcome! Explore and cook your favorite meals.</Text>
      <Button title="View Recipe" onPress={() => navigation.navigate('Recipe')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20, backgroundColor: '#fff',},
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 10, textAlign: 'center',},
  subtitle: { fontSize: 18, color: '#666', marginBottom: 30, textAlign: 'center',},
  buttonContainer: { marginTop: 20, width: '60%',},
});
