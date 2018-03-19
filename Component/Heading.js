import React from 'react'; 
import {View, Text} from 'react-native'; 

//Child Component
class Heading extends React.Component{
    render(){
      return(
        <View>
          <Text>{this.props.message}</Text>
        </View>
      );
    }
  }

export default Heading;

