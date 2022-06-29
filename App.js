import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';
import MainScreen from './components/Main';
import  {firebaseAuth} from './src/firebase/config';
import LoginScreen from './components/auth/Login';
import { NavigationContainer } from  "@react-navigation/native";
import { createStackNavigator } from  "@react-navigation/stack";
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, Button} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';
const store = createStore(reducer, applyMiddleware(thunk));


const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      loggedIn: false,
    }
    this.onSignOut = this.onSignOut.bind(this);
  }

  onSignOut() {
    firebaseAuth.signOut();
    this.setState({loaded: true, loggedIn: false});
  }

  componentDidMount() {
    firebaseAuth.onAuthStateChanged((user) => {
      console.log('senay',user);
      if(!user) {
        this.setState({
          loggedIn: false,
          loaded: true
        });
      } else {
        this.setState({
          loggedIn: true,
          loaded: true
        });
      }
    }
    )
  }

  

  render() {
    const {loggedIn, loaded } = this.state;
    if(!loaded) { 
      return (
        <View>
          <Text>Loading...</Text>
        </View>
        );
      }
      if(!loggedIn) {
        return (
          <NavigationContainer>
            <Stack.Navigator initialRouteName = "Landing">
              <Stack.Screen name= "Landing" component={LandingScreen} options = {{headerShown: false}} />
              <Stack.Screen name= "Register" component={RegisterScreen} options = {{headerShown: false}} />
              <Stack.Screen name= "Login" component={LoginScreen} options = {{headerShown: false}} />
            </Stack.Navigator>
          </NavigationContainer>
        );
      }

      return (

        <Provider store={store}>
        <MainScreen/>
        </Provider>
      )
  }
}
