'use strict';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight
} from 'react-native';

var Classes = require('./Classes.json');

class HWMatrix extends Component {

constructor(props){
  super(props);

  this.state = {
    data: [],
    hoursLow: 0,
    hoursHigh: 0,
  };
}

_onPress(item){
  this.setOpacityTo(value: 1);
}

  calcHoursofHW(rowsChecked) {
    var lowerNum = 0;
    var higherNum = 0;
    return(
      this.setState({hoursLow: lowerNum}, {hoursHigh: higherNum})
    )
  }

renderItem({item, index}){
  return(
    <TouchableHighlight>
    <Text>{item}</Text>
    </TouchableHighlight>
  )
}

render() {
    return (
      <View>
      <View>
        <Text style={styles.welcome}>
          WHS HW Rigor Matrix
        </Text>
        <Text style={styles.instructions}>
          To get started, check the boxes next to the classes you want to take
        </Text>
      </View>
      <FlatList
        data={this.state.data}
        renderItem={this.renderItem}

      />
      <View>
      <Text>Hours of HW: {this.state.hoursLow} - {this.state.hoursHigh}</Text>
      </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('HWMatrix', () => HWMatrix);
