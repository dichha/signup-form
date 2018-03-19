import React from 'react'; 
import {TextInput, View, StyleSheet, ScrollView} from 'react-native'; 

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            input: ''
        }
    }
    handleChangeInput = (text) => {
        this.setState({input: text})
    }
    handleSubmitEvent = (e) =>{
        alert('A name was submitted: ' + this.state.input);
        e.preventDefault(); 
    } 
    render(){
        const {input} = this.state.input
        return(
            <ScrollView scrollEnabled={false}>
                <TextInput style={styles.container}
                    onChangeText={this.handleChangeInput}
                    value={input}
                />
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        height: 40,
        borderColor: 'gray', 
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //flex: 1,
    },
});

export default Form; 