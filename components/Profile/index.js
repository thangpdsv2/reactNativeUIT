import React from 'react'
import { View, Text , Button} from 'react-native'


const Profile = ({navigation}) =>{
    return (
        <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
            <Text>Profile</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    )
}

export default Profile

