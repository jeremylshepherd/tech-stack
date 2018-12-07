/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Image, StyleSheet, Text, View} from 'react-native';
import { Header } from './components/Elements';
import { sanFranciscoWeights } from 'react-native-typography';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers'
import LibraryList from './components/LibraryList';


export default App = () =>  (
  <Provider store={createStore(reducers)}>
    <View style={styles.container}>
      <Header text="Tech Stack" />
      <View style={styles.body}>        
        <LibraryList />
      </View>
    </View>
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  body: {
    flex: 14,
    alignItems: 'stretch',
    width: '100%',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
  }
});


/*

<Image
  source={{uri: 'https://i.gifer.com/Dnxs.gif'}}
  style={{ width: 300, height: 200 }}
/>
<Text 
  style={{ 
    ...styles.text, 
    ...sanFranciscoWeights.heavy 
  }}
>
  Come on, buddy!
</Text>

*/