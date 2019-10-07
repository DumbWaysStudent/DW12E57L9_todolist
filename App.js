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
          {title:'work', isDone: false},
          {title:'swim', isDone: false},
          {title:'study', isDone: false},
          {title:'sleep', isDone: false},
          {title:'run', isDone: false}
      ],
      activeItemId: null,
    }
}

addTodo (item) {
    console.log(this.state)
    const newTodo = this.state.todo
    newTodo.push(item)

    this.setState({ todo: newTodo })
  }
  deleteTodo (index) {
    const newTodo = this.state.todo
    newTodo.splice(index, 1)

    this.setState({ todo: newTodo })
  }
  isDone (index) {
    const newTodo = this.state.todo
    newTodo[index].isDone = !newTodo[index].isDone
    this.setState({ todo: newTodo })
  }
  updateTodo (index) {
    if (this.state.activeItemId !== null) {
      const newTodo = this.state.todo
      this.state.activeItemId = null;
      this.setState({ todo: newTodo })
    }
    else {
      const newTodo = this.state.todo
      this.state.activeItemId = index;
      this.setState({ todo: newTodo })
    }
  }

  onChangeTodo (newTitle) {
    const newTodo = this.state.todo
    newTodo[this.state.activeItemId].title = newTitle
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
        todo={this.state.todo}
        onChangeTodo={(newTitle) => this.onChangeTodo(newTitle)}
        deleteTodo={(value) => this.deleteTodo(value)}
        isDone={(value) => this.isDone(value)}
        updateTodo={(value) => this.updateTodo(value)}
        activeItemId={this.state.activeItemId}
       />
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