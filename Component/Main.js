import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import AddEvent from './AddEvent';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';

export default class Main extends Component {

  HandleAddEvent() {
    console.log('handle event');
    this.props.navigation.navigate('AddEv');
  }

  static navigationOptions = {
    header: null
  }

  render() {

    return (
      <View style={styles.container}>

        <Header addNewEvent={this.HandleAddEvent.bind(this)}/>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});