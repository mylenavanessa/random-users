import React, { Component } from 'react';
import { View, Text, Image } from 'react-native'; 
import Button from '../../components/Button'

import styles from './styles.js';

class Home extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> 
          Random Users
        </Text>
        <Image 
          style={styles.image} 
          source={require('../../assets/user.png')}
        />
        <Button onPress={() => this.props.navigation.navigate('Main')}>
          Enter
        </Button>
      </View>
    )
  }
}


export default Home;
