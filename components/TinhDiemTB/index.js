import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { useState } from 'react'

export default function TinhDiemTB() {
    const [diemHK1, setDiemHK1] = useState('')
    const [diemHK2, setDiemHK2] = useState('')
    const [diemTB, setDIEMTB] = useState('')
    const [ketQua, setKetQua] = useState('')
    const [hocLuc, setHocLuc] = useState('')
    return (
        <>
            <View style={{ alignItems: 'center', justifyContent: 'top', flex: 1 }}>
                <Text style={styles.headerText}>Tính điểm trung bình</Text>
                <Text style={styles.headerText}>Kết Quả Học Tập</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, alignSelf: 'center' }} >Điểm học kỳ 1:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Điểm HK 1"
                        keyboardType="numeric"
                        onChangeText={(value) => {
                            if (value < 10 && value >= 0) {
                                setDiemHK1(value)
                                
                            } else {
                                alert('Invalid input')
                                setDiemHK1('')
                            }
                        }}
                        value={diemHK1}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, alignSelf: 'center' }} >Điểm học kỳ 2:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Điểm HK 2"
                        keyboardType="numeric"
                        onChangeText={(value) => {
                            if (value < 10 && value >= 0) {
                                setDiemHK2(value)
                                
                            } else {
                                alert('Invalid input')
                                setDiemHK2('')
                            }
                        }}
                        value={diemHK2}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, alignSelf: 'center' }} >Điểm TB:</Text>
                    <TextInput
                        style={styles.input}
                        value={diemTB}
                        editable={false} selectTextOnFocus={false}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, alignSelf: 'center' }} >Ket Qua:</Text>
                    <TextInput
                        style={styles.input}
                        value={ketQua}
                        editable={false} selectTextOnFocus={false}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, alignSelf: 'center' }} >Xep Loai:</Text>
                    <TextInput
                        style={styles.input}
                        value={hocLuc}
                        editable={false} selectTextOnFocus={false}
                    />
                </View>
                <Button title="Tính điểm TB" onPress={() => {
                    if(diemHK1 == '' || diemHK2 == ''){
                        alert('Vui lòng nhập đủ điểm')
                        return
                    }
                    let calculateDiemTB = (parseFloat(diemHK1) + parseFloat(diemHK2) * 2) / 3
                    setDIEMTB(calculateDiemTB.toString().substring(0, 3))
                    if (calculateDiemTB >= 5) {
                        setKetQua('Được lên lớp')
                    } else {
                        setKetQua('Ở lại lớp')
                    }
                    if (calculateDiemTB >= 8) {
                        setHocLuc('Giỏi')
                    } else if (calculateDiemTB >= 6.5) {
                        setHocLuc('Khá')
                    } else if (calculateDiemTB >= 5) {
                        setHocLuc('Trung Bình')
                    } else {
                        setHocLuc('Yếu')
                    }
                }} />
            </View>


        </>
    )
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 20,
    },
    input: {
        height: 40,
        margin: 12,
        width: 200,
        borderWidth: 1,
        padding: 10,
    },
})



