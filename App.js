import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import List from './src/Component/List';
import AddTodo from './src/Component/AddTodo';


class App extends Component {
  constructor(){
    super()
    this.state = {
        todo: [
            'work',
            'swim',
            'study',
            'sleep',
            'run'
        ]
    }
}

addTodo (item) {
    console.log(this.state)
    const newTodo = this.state.todo
    newTodo.push(item)

    this.setState({ todo: newTodo })
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
                <Text style={styles.title}> To Do</Text>
            </View>

            <View style={styles.textinputcontainer}>
        <AddTodo addTodo={(value) => this.addTodo(value)} />
      </View>

      <View style={styles.list}>
        <List
          todo={this.state.todo} />
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
  todocontainer: {
    flex: 1,
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
  textinputcontainer:{
    flex: 0,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  container: {
    backgroundColor: 'black',
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
