import React, {Component} from 'react';
import {
  TextInput,
  Text,
  View,
  Button,
  StyleSheet
} from 'react-native'


class List extends Component{
    constructor(props){
        super(props);
        this.state = {
            text : 'When submited,the text here soud change',
            textInput : 'Type here'
        }
    }

    handleSubmit = () => {
        const {textInput} = this.state
        this.setState({
            text : textInput,
            textInput  : ''
        });
    }

    handleChangeText = (text) => {
        this.setState({textInput : text})
    }

    render(){
      
        const state=[  'work',
        'swim',
        'study',
        'sleep',
        'run']
        return(
            <View style={styles.container}>
               <View style={{alignItems:'center' }}>
                   <Text style={styles.title} > Todo Apps</Text>
              </View>
                     <View style={styles.contentContainer}>
                   {state.map((item,index)=>{
                    return (
                      
                        //untuk text diberi key dan index agar bisa tampil
                    <Text style={styles.listContainer}key={index}>{item}</Text>
                  
                    )})}
                      </View>
                   </View>  
    
            
        )
        }
    }

    export const styles =StyleSheet.create({
        container:{
            flex:1,
          
            backgroundColor: 'brown',
        },
      
        contentContainer:{
            flex:1,
            backgroundColor:'black',
            padding:18,
        },
        listContainer:{
            flexDirection:'column',
            justifyContent:'center',
            borderBottomWidth:0.5,
            backgroundColor:'white',
            borderColor:'black',
            paddingVertical:13,  
        },
        rowList:{
                flexDirection:'row',
    justifyContent:'space-between'
        }
    });
    export default List;