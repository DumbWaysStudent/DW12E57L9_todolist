import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

class AddTodo extends Component {
    constructor(){
        super()
        this.state = {
            inputValue: ''
        }
    }

    onPress(){
        this.props.addTodo(this.state.inputValue)
        this.setState({inputValue: ''})
    }

    render(){
        return(
            <View style={styles.container}>
                <View>
                    <TextInput
                        onChangeText={(text) => this.setState({inputValue: text})}
                        style={styles.inputcontainer}
                        placeholder='Input todo'
                        value={this.state.inputValue}/>
                </View>
                <View>
                    <TouchableOpacity onPress={() => this.onPress()} style={styles.button} >
                        <Text>Add</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

export default AddTodo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputcontainer: {
        flex: 0,
    },
    button: {
        flex: 0,
        padding: 10,
        justifyContent: 'center',
        backgroundColor: 'yellow'
    }
})