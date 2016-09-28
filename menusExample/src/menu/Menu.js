// @flow

import React, { Component } from 'react';
import { StyleSheet, Animated } from 'react-native';
import ScaleAnimation from '../animations/ScaleAnimation';

class Menu extends Component {
  props: {
    menuAnimation?: any;
    children?: any;
  }

  static defaultProps = {
    menuAnimation: new ScaleAnimation(),
  }

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  openMenu() {
    this.props.menuAnimation.toValue(1);
  }

  closeMenu() {
    this.props.menuAnimation.toValue(0);
  }

  render() {
    return (
      <Animated.View style={[styles.container, this.props.menuAnimation.animations]} >
        {this.props.children}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: 350,
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 2,
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 0.3,
    },
  },
});

export default Menu;
