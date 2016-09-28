// @flow

import { Animated } from 'react-native';

class Animation {
  constructor(toValue: ?number = 0) {
    this.animate = new Animated.Value(toValue);
    this.animations = this.createAnimations();
  }

  toValue(toValue: number) {
    return toValue;
  }

  createAnimations(): Object {
    return {};
  }
}

export default Animation;
