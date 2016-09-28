// @flow

import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

class MenuItem extends Component {
  props: {
    primaryText: ?string;
    secondaryText: ?string;
    // leftIcon?: any;
    // rightIcon?: any;
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => {}} style={{}}>
          <View style={styles.item}>
            <Text style={styles.primaryText}>{this.props.primaryText}</Text>
            <Text style={styles.secondaryText}>{this.props.secondaryText}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: 'row',
    justifyContent: 'center',
    // height: 50,
  },
  primaryText: {
    fontSize: 18,
  },
  secondaryText: {
    fontSize: 12,
    color: '#D4D7D8',
  },
  item: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30,
  },
});

export default MenuItem;
