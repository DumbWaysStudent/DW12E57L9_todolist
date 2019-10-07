  
import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

class DeleteTodo extends Component {
    render () {
        return(
            <TouchableOpacity onPress={() => this.props.deleteTodo()} style={styles.button}>
                <Text>DELETE</Text>
            </TouchableOpacity >
        )
    }
}



const styles = StyleSheet.create({
    button: {
        flex: 0,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        marginVertical: 5
    }
})
export default DeleteTodo;