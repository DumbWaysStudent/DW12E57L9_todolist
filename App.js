import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import List from './src/Component/List';



class App extends Component {
  
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
                <Text style={styles.title}> To Do</Text>
            </View>

        <View style={styles.input}>

        </View>

        <View style={styles.list}>
        <List />
        </View>

      </View>
    )
  }
}
export default App;

const styles = StyleSheet.create({
  headercontainer: {
    flex: 0,
    justifyContent: 'center'
    
  },
  input:{
    flex: 0,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  list: {
    flex: 1,
    justifyContent: 'center',
    color :'brown'
  },
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  header: {
    backgroundColor: 'black',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center' 
 },
 title: {
     color: 'white',
     fontSize: 32,
     fontWeight: '900',
     textTransform: 'uppercase'
 }
})
