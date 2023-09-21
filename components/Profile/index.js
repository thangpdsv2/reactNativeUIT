import React from 'react'

import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { useState, useContext } from 'react'



export default function Profile({route, navigation}) {
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
                    />
                </View>

            </View>
        </>
    )
}

