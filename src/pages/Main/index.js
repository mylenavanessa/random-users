import React, { Component } from 'react';
import { View, Alert, FlatList, Image , ActivityIndicator, TouchableOpacity } from 'react-native'; 
import { connect } from 'react-redux';

import * as Actions from './store/dispatchers';
import styles from './styles.js';

class Main extends Component {
  state = { 
    page: 0
  }

  static navigationOptions ={
    title: 'Random Users',
    headerStyle: {
      backgroundColor: '#048444'
    },
    headerTitleStyle: {
      color: '#fff'
    },
    headerTintColor: '#fff'
  }

  componentDidMount() {
    this.onSearch()
  }

  onSearch = () => {
    const { page } = this.state
    this.props.dispatchFetchUsers(page+1)
    this.setState({ page: page+1 })
  }

  handleAlert = user => {
    Alert.alert(
      `${user.name.first} ${user.name.last}`,
      `${user.email}`,
      [
        null,
        null,
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.users.data}
          keyExtractor={item => item.id.value + Math.random()}
          contentContainerStyle= {styles.gallery}
          numColumns={3}
          onEndReached={this.onSearch}
          onEndReachedThreshold={0.1}
          ListFooterComponent={<ActivityIndicator/>}
          renderItem={({item}) =>
            <TouchableOpacity onPress={() => this.handleAlert(item)}>
              <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                <Image style={styles.image} source={{uri: item.picture.large}}/>
              </View>
            </TouchableOpacity>
          }
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = {...Actions};

export default connect(mapStateToProps,mapDispatchToProps)(Main);
