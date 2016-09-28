import Exponent from 'exponent';
import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Dimensions } from 'react-native';

import Menu from './src/menu/Menu';
import MenuItem from './src/menuItem/MenuItem';
import Divider from './src/divider/Divider';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpened: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    if (this.state.menuOpened) {
      this.menu.openMenu();
    } else {
      this.menu.closeMenu();
    }

    this.setState({ menuOpened: !this.state.menuOpened });
  }

  render() {
    return (
      <View style={styles.container}>
        <Menu
          ref={(menu) => { this.menu = menu; }}
        >
          <MenuItem
            primaryText="Primary Text"
            secondaryText="Secondary Text"
          />
          <MenuItem
            primaryText="Primary Text"
            secondaryText="Secondary Text"
          />
          <Divider />
          <MenuItem
            primaryText="Primary Text"
            secondaryText="Secondary Text"
          />
        </Menu>

        <TouchableHighlight
          onPress={this.toggleMenu}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            {this.state.menuOpened ? 'Close Menu' : 'Open Menu'}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: WIDTH * 0.4,
    height: HEIGHT * 0.08,
    borderRadius: 50,
    borderWidth: 0,
    backgroundColor: '#009688',
    justifyContent: 'space-around',

  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 15,
    color: 'rgba(255,255,255,0.9)',
    fontWeight: '100',
  },
});

Exponent.registerRootComponent(App);
