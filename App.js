import { NavigationContainer } from  "@react-navigation/native";
import { createStackNavigator } from  "@react-navigation/stack";
import LandingScreen from './components/auth/Landing';
import * as firebase from 'firebase';
import 'react-native-gesture-handler';

const firebaseConfig = {
  apiKey: "AIzaSyBa0SCgZfqlVRR1rKIU7t-3DcBxKdQ1fqg",
  authDomain: "instagram-dev-706d0.firebaseapp.com",
  projectId: "instagram-dev-706d0",
  storageBucket: "instagram-dev-706d0.appspot.com",
  messagingSenderId: "801572028538",
  appId: "1:801572028538:web:b86bc24060f88cb4867bc3"
};

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
