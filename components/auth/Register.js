import React, { Component } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { Button, View } from 'react-native';
import { createUserWithEmailAndPassword, getAuth } from  "firebase/auth";
import { firebaseAuth, firebaseApp,firebaseDB } from "../../src/firebase/config";
import { getDatabase, ref, set } from "firebase/database";

export default class RegisterScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: ""
        }


    }

    onSignUp() {
        const { name, email, password } = this.state;
        
        createUserWithEmailAndPassword(firebaseAuth,email, password).then((result) => {
            writeUserData(result.user.uid, result.user.name, result.user.email, "");
        }).catch((error) => {console.log('error',error)});
    }

    render() {
        return (
            <View style= {{flex: 1,justifyContent: 'center'}}>
                <TextInput placeholder='please enter name' onChangeText={(name) => this.setState({name})} />
                <TextInput placeholder='please enter email' onChangeText={(email) => this.setState({email})} />
                <TextInput placeholder='please enter password' secureTextEntry={true} onChangeText={(password) => this.setState({password})} />
                <Button title = "Sign Up" onPress={()=> this.onSignUp()}/>
            </View>
        )
    }


    
}

function writeUserData(userId, name, email, imageUrl) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }