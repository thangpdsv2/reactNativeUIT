import React from 'react'

import { View, Text, SectionList, StyleSheet } from 'react-native'

const DATA = [
    {
        title:'Main dishes',
        data:['Pizza','Burger','Risotto']
    },
    {
        title:'Sides',
        data:['French Fries','Onion Rings','Fried Shrimps']
    },
    {
        title:'Drinks',
        data:['Water','Coke','Beer']
    },
    {
        title:'Desserts',
        data:['Cheese Cake','Ice Cream']
    }
]


const Main = () =>{
    return (
        <>
            <SectionList
                sections={DATA}
                keyExtractor={(item,index)=>item+index}
                renderItem={({item})=><Text style={styleSheet.item}>{item}</Text>}
                renderSectionHeader={({section})=><Text style={styleSheet.header}>{section.title}</Text>}
            />
        </>
    )
}

const styleSheet= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    item:{
        backgroundColor:'#f9c2ff',
        padding:20,
        marginVertical:8
    },
    header:{
        fontSize:32,
        backgroundColor:'#fff'
    },
    title:{
        fontSize:24
    }
})

export default Main