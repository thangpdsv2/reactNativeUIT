import React, { useState} from 'react'
import {
    Text,
    View,
    FlatList,
    StyleSheet,
} from 'react-native';
import Checkbox from '@react-native-community/checkbox';
// import RadioGroup from 'react-native-radio-buttons-group';
const Data = [
    { id: 1, question: 'Question A' },
    { id: 2, question: 'Question B' },
    { id: 3, question: 'Question C' },
]

type ItemProps = {
    question: string;
}
const Item = (props: ItemProps) => {
    console.log(props)
    
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <View style={styles.item}>
            <Checkbox disabled={false} value={toggleCheckBox} onValueChange={(newValue)=>setToggleCheckBox(newValue)} style={styles.checkbox} />
            
            <Text style={styles.question}>
                {props.question}
            </Text>
        </View>
    )
}

const Main = () => {
    return (
        <>
            <FlatList
                data={Data}
                renderItem={({item})=>{
                    return <Item {...item} /> 
                } }
                keyExtractor={(item) => item.id.toString()}
            />
            <View>
                <Text> Main </Text>
            </View>
        </>
    )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    item:{
        backgroundColor:'pink',
        padding:20,
        flexDirection:'row',
    },
    question:{
        fontSize:24,
    },
    checkbox:{
    }
})


export default Main
