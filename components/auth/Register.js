import React, { Component } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { Button, View } from 'react-native-web';

export class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: ""
        }

        this.onSignUp =  this.onSignUp.bind(this);
    }

    onSignUp() {
        console.log("senay")
    }

    render() {
        return (
            <View>
                <TextInput placeholder='please enter name' onChangeText={() => this.setState({name})} />
                <TextInput placeholder='please enter email' onChangeText={() => this.setState({email})} />
                <TextInput placeholder='please enter password' secureTextEntry={true} onChangeText={() => this.setState({password})} />
                <Button title = "Sign Up" onPress={()=> this.onSignUp()}/>
            </View>
        )
    }
}