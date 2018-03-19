import React from 'react'; 
import {View,StyleSheet, Button, ScrollView} from 'react-native'; 
import t from 'tcomb-form-native'; 

const Form = t.form.Form; 

const User = t.struct({
    email: t.String, 
    username: t.maybe(t.String), 
    password: t.String, 
    terms: t.Boolean
});
const formStyles = {
    ...Form.stylesheet,
    formGroup: {
        normal: {
        marginBottom: 10
        },
    },
    controlLabel: {
        normal: {
        color: 'blue',
        fontSize: 18,
        marginBottom: 7,
        fontWeight: '600'
        },
        // the style applied when a validation error occours
        error: {
        color: 'red',
        fontSize: 18,
        marginBottom: 7,
        fontWeight: '600'
        }
    }
}

class LoginForm extends React.Component{
    handleSubmit = () => {
        //const value = 'apple';
        const value = this._form.getValue(); // use that ref. to get the form value
        console.log('value', value); 
    }
    render(){
        return(
            <View style={styles.container}>
                <Form 
                ref={c => this._form = c} // assign a ref
                type={User} 
                options={options}
                />
                <Button 
                    title="Sign Up!"
                    onPress={this.handleSubmit}
                />
            
            </View>
        );
    }
    
}
const options = {
    fields: {
      email: {
        error: 'Without an email address how are you going to reset your password when you forget it?'
      },
      password: {
        error: 'Choose something you use on a dozen other sites or something you won\'t remember'
      },
      terms: {
        label: 'Agree to Terms',
      },
    },
    stylesheet: formStyles,
  };


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff', 
        justifyContent: 'center',
        //marginTop: 50, 
        padding: 20,
    },
});

export default LoginForm; 
