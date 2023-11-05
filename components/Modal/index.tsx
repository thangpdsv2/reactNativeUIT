import * as React from 'react'
import {useState}  from 'react'
import { Modal, Pressable, Alert, View, Text, SectionList, StyleSheet } from 'react-native'


const Main = () =>{
const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.header}>Modal Example</Text>
                <Pressable style={styles.item} onPress={() => setModalVisible(true)}>
                    <Text>Open Modal</Text>
                </Pressable>
            </View>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed')
                    setModalVisible(!modalVisible)
                }}
            >
                <View style={styles.container}>
                    <View style={styles.item}>
                        <Text style={styles.header}>Modal is open!</Text>
                        <Pressable style={styles.item} onPress={() => setModalVisible(false)}>
                            <Text>Close Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({

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
})


export default Main;