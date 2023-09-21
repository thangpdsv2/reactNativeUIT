
import React from 'react';
import {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {ThemeContext, AuthContext} from '../../Context';

const ButtonTest = () =>{
    var theme = useContext(ThemeContext);
    return (
        <>
            <View><Text>{theme}</Text></View>
        <Button title="Click me" onPress={()=>{}}/>
        </>
    )
}

export default ButtonTest;




