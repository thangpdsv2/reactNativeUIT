import * as React from 'react'

import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { useState, useContext } from 'react'



export default function Profile({route, navigation}:any) {
    const {tk, mk} = route.params
    const [hoTen, setHoTen] = useState(tk)
    const [matKhau, setMatKhau] = useState(mk)
    
    return (
        <>
            <View style={{ alignItems: 'center', justifyContent: 'top', flex: 1 }}>
                <Text style={styles.headerText}>Thông tin cá nhân</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, alignSelf: 'center' }} >Họ và tên:</Text>
                    <TextInput

                        style={styles.input}
                        placeholder="Họ và tên"
                        keyboardType="default"
                        onChangeText={(value) => setHoTen(value)}
                        value={hoTen}
                        editable={false} selectTextOnFocus={false}

                    />
                    </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, alignSelf: 'center' }} >Mật Khẩu:</Text>
                    <TextInput

                        style={styles.input}
                        placeholder="Mật Khẩu"
                        keyboardType="default"
                        onChangeText={(value) => setMatKhau(value)}
                        value={matKhau}
                        editable={false} selectTextOnFocus={false}

                    />
                </View>

            </View>
        </>
    )
}


const styles = StyleSheet.create({
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        width: 200,
        borderRadius: 10,
        alignSelf: 'center',
    },
})