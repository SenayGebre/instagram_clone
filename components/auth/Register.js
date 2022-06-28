import React, { Component } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { Button, View } from 'react-native';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { firebaseAuth, firebaseApp, firebaseDB, firestoreDB } from "../../src/firebase/config";
import { getDatabase, ref, set } from "firebase/database";
import { addDoc, collection } from "firebase/firestore";

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

        createUserWithEmailAndPassword(firebaseAuth, email, password).then((result) => {
            writeUserData(result.user.uid, name, result.user.email);
        }).catch((error) => { console.log('error', error) });
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <TextInput placeholder='please enter name' onChangeText={(name) => this.setState({ name })} />
                <TextInput placeholder='please enter email' onChangeText={(email) => this.setState({ email })} />
                <TextInput placeholder='please enter password' secureTextEntry={true} onChangeText={(password) => this.setState({ password })} />
                <Button title="Sign Up" onPress={() => this.onSignUp()} />
            </View>
        )
    }



}

function writeUserData(userId, name, email) {
    console.log('writeUserData', userId, name, email);
    // Add a new document in collection "cities"
 addDoc(collection(firestoreDB, "users"), {
        name: name,
        email: email,
        userId: userId
    }).then(() => {
        console.log("Document successfully written!");
    }).catch((error) => {
        console.log("Error writing document: ", error);
    });
}