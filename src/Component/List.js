import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet, Image } from 'react-native';


Item = ({ title }) => {
    return (
        <View style={styles.itemcontainer}>
            <Text style={styles.title}> {title.item} </Text>
        </View>
    )
}

class List extends Component {
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.props.todo}
                    renderItem={(item) => <Item title={item} />}
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