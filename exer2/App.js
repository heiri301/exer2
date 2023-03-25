import React, {Component} from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { slide as menu } from 'react-burger-menu';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends Component {
  render(){
    return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.paragraph}>
          Home
        </Text>
      </View>
      <View style={styles.body}>
        <Image style={styles.logo} source={require('./assets/snack-icon.png')} />
        <Text style={styles.paragraph}>
          Hi there!
        </Text>
      <Text style={styles.paragraph}>
        Welcome to APPNAME
      </Text>
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    //backgroundColor: '#ecf0f1',
    padding: 8,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#bfe6ff',
    padding: 8,
  },
  header : {
    flex: .10,
    justifyContent: 'center',
    backgroundColor: 'powderblue',
  },
  paragraph: {
    margin: 4.5,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    alignSelf: 'center',
    margin: 60,
    width: 100,
    height: 100,
  }
});
