import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Navigator'

export default class App extends React.Component {
  render() {
    return (
        <Navigation/>
    );
  }
}

// export default function App() {
  //return (
    //<View style={styles.container}>

     // <Text>무우상 다이어리</Text>
   // </View>
 // );
//}

//const styles = StyleSheet.create({
  //container: {
   /// flex: 1,
   // alignItems: 'center',
   // justifyContent: 'center',
  //},
//});
