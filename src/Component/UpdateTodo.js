import React, { Component } from 'react';
import { StyleSheet,Button, Text, TouchableOpacity } from 'react-native';


class UpdateTodo extends Component {
    render() {
        return(
            <TouchableOpacity onPress={ () =>this.props.updateTodo() } style={styles.button}>
                <Text>{this.props.isEditMode 
                    ? <Text name="save">Save</Text>
                    : <Text name="edit">Edit</Text>
                    }
                </Text>
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
        backgroundColor: '#ffffff',
        marginVertical: 5
    }
})
export default UpdateTodo;


