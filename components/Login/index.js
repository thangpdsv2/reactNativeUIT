import React from 'react'

import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { useState } from 'react'



export default function Login({ navigation}) {
    const [taiKhoan, setTaiKhoan] = useState('')
    const [matKhau, setMatKhau] = useState('')
    return (
        <>
            <View style={{ alignItems: 'center', justifyContent: 'top', flex: 1 }}>
                <Text style={styles.headerText}>Đăng nhập</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, alignSelf: 'center' }} >Tài khoản:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Tài khoản"
                        keyboardType="default"
                        onChangeText={(value) => setTaiKhoan(value)}
                        value={taiKhoan}
                    />

                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, alignSelf: 'center' }} >Mật khẩu:</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Mật khẩu"
                        keyboardType="default"
                        onChangeText={(value) => setMatKhau(value)}
                        value={matKhau}
                    />


                </View>
                <Button
                    title="Đăng nhập"
                    onPress={() => {
                        if (taiKhoan == 'admin' && matKhau == 'admin') {
                            alert('Đăng nhập thành công')
                            navigation.navigate('Profile',{
                                tk: taiKhoan,
                                mk: matKhau,
                            })
                        } else {
                            alert('Đăng nhập thất bại')
                        }
                    }}
                />
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'blue',
        marginBottom: 20,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        width: 200,
        borderRadius: 10,
        padding: 10,
    },
})