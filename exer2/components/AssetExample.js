import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    bgcolor: 'brown',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  /*
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  */
  logo: {
    height: 200,
    width: 200,
  },
});
