import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet,CheckBox, Image } from 'react-native';
import DeleteTodo from './DeleteTodo';
import UpdateTodo from './UpdateTodo';
Item = (props) => {
    return (
        <View style={styles.itemcontainer}>
            <View style={{flexDirection:'row'}}>
                <CheckBox
                style={styles.checkbox}
                onChange={props.isDone}
                value={props.check}/>

                { props.activeItemId ===  props.index ?
                    <TextInput
                        style={styles.title}
                        onChangeText={(value) => props.onChangeTodo(value)}
                        placeholder='Edit mode'
                        value={props.title}
                    />
                    :
                    <Text style={styles.title}> {props.title} </Text>
                }
            </View>
            <View style={{flexDirection:'row-reverse'}}>
                <DeleteTodo deleteTodo={() => props.deleteTodo()} />
                <UpdateTodo isEditMode={props.activeItemId ===  props.index} updateTodo={() => props.updateTodo()} />
            </View>
        </View>
    )
}
class List extends Component {
    render(){
        return(
            <View style={styles.container}>
                     <FlatList
                  data={this.props.todo}
                  renderItem={({item, index}) =>
                      <Item
                          title={item.title}
                          check={item.isDone}
                          index={index}
                          onChangeTodo={(newTitle) => this.props.onChangeTodo(newTitle)}
                          deleteTodo={() => this.props.deleteTodo(index)}
                          isDone= {() => this.props.isDone(index)}
                          updateTodo= {() => this.props.updateTodo(index)} 
                          activeItemId={this.props.activeItemId} />
                  }
                  keyExtractor={(item, index) => index}         />
            </View>
        )
    }
}

export default List;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        marginTop: 0,
    },
    itemcontainer: {
        backgroundColor: 'white',
        padding: 8,
        marginVertical: 2,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 24,
        color: 'black'
    }
})