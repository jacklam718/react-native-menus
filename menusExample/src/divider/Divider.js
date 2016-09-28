// @flow

import React from 'react';
import { View, StyleSheet } from 'react-native';

function Divider(dividerStyle: number | Object) {
  return (
    <View style={[styles.divider, dividerStyle]} />
  );
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: '#E9E9E9',
  },
});

export default Divider;
