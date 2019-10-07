import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet,CheckBox, Image } from 'react-native';
import DeleteTodo from './DeleteTodo';

Item = (props) => {
    return (
        <View style={styles.itemcontainer}>
         <CheckBox
                onChange={props.isDone}
                value={props.check}/>
            <Text style={styles.title}> {props.title} </Text>
            <DeleteTodo deleteTodo={() => props.deleteTodo()} />
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
                            deleteTodo={() => this.props.deleteTodo(index)}
                            isDone= {() => this.props.isDone(index)}  />
                    }
                    keyExtractor={(item, index) => index}               />
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