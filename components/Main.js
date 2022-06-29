import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../redux/actions';

export class Main extends Component {
    componentDidMount() {
        this.props.fetchUser();
        
    }
  render() {
    const { currentUser } = this.props;


    console.log("current user *********8",currentUser);
    return (
        <View>
          <Text>You are logged in</Text>
          <Button title = "Sign Out" onPress={()=> this.onSignOut()}/>
        </View>
      )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({fetchUser}, dispatch);

export default connect(null,  mapDispatchToProps)(Main);