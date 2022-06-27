import React, { Component } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { Button, View } from 'react-native';
import {  signInWithEmailAndPassword, getAuth } from  "firebase/auth";
import { firebaseAuth } from "../../src/firebase/config";

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }

    }

    OnSignIn() {
        const { email, password } = this.state;
        
        signInWithEmailAndPassword(firebaseAuth,email, password).then((result) => {
            console.log('result',result);
            console.log('signed  in');
        }).catch((error) => {console.log('error',error)});
    }

    render() {
        return (
            <View style= {{flex: 1,justifyContent: 'center'}}>
                <TextInput placeholder='please enter email' onChangeText={(email) => this.setState({email})} />
                <TextInput placeholder='please enter password' secureTextEntry={true} onChangeText={(password) => this.setState({password})} />
                <Button title = "Sign In" onPress={()=> this.OnSignIn()}/>
            </View>
        )
    }
}