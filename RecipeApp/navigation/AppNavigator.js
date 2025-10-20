import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../screens/AuthScreen';
import FeedbackScreen from '../screens/FeedbackScreen';
import HomeScreen from '../screens/HomeScreen';
import RecipeScreen from '../screens/RecipeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen 
        name="Auth" 
        component={AuthScreen} 
        options={{ headerShown: false }}  // hides the header on login screen
      />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Recipe" component={RecipeScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Feedback" component={FeedbackScreen} />
    </Stack.Navigator>
  );
}
