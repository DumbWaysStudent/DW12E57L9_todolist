import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet, Image } from 'react-native';
import DeleteTodo from './DeleteTodo';

Item = (props) => {
    return (
        <View style={styles.itemcontainer}>
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
                            title={item}
                            index={index}
                            deleteTodo={() => this.props.deleteTodo(index)}  />
                    }
                    keyExtractor={(item, index) => index}

                />
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