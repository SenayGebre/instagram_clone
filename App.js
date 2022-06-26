import LandingScreen from './components/auth/Landing';
import { NavigationContainer } from  "@react-navigation/native";
import { createStackNavigator } from  "@react-navigation/stack";
import { firebase } from "./src/firebase/config";
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "La nding">
        <Stack.Screen name= "Landing" component={LandingScreen} options = {{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
