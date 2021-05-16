import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
const SectionNews = (props) =>{
    return(
        <View style={{ paddingTop: 20, paddingHorizontal: 15 }}>
            <View style={{ position: "relative" }}>
                <Image source={props.img} style={{ height: 200, width: '100%', borderRadius: 6 }} />
                <View style={{ width: '100%', height: '100%', position: "absolute", top: 0, left: 0, backgroundColor: 'black', opacity: 0.1, borderRadius: 6 }}></View>
                <View style={{ height: 15, width: 55, position: 'absolute', left: 16, top: 16 }}>
                    <Image source={require('../../../assets/logo/white.png')} style={{ width: '100%', height: undefined, resizeMode: "contain", flex: 1 }} />
                </View>
            </View>
            <View style={{ paddingTop: 16, paddingBottom: 20, borderBottomColor: '#e8e9ed', borderBottomWidth: 1 }} >
                <Text style={{ fontSize: 16, fontWeight: "bold", color: '#1c1c1c' }}>GO-NEWS</Text>
                <Text style={{ fontSize: 14, fontWeight: "normal", color: '#7a7a7a', marginBottom: 11 }}>Dimas Drajat selamatkan penalti, Timnas U-23 kalahkan brunei</Text>
                <TouchableOpacity style={{ backgroundColor: '#61a756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: "flex-end", borderRadius: 4 }}>
                    <Text style={{ fontSize: 13, fontWeight: "bold", color: 'white', textAlign: "center" }}>READ</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SectionNews;