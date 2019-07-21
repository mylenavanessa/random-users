import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles.js';

const Button = props => {
  const { children, ...restProps } = props
  return (
    <TouchableOpacity {...restProps}>
      <View style={styles.container}>
        <Text style={styles.title}>{children}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Button;
