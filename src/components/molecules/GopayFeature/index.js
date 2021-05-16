import React from 'react';
import { Image, Text, View } from 'react-native';

const GopayFeature = (props) => {
    return (
        <View onPress={props.onPress} style={{ flex: 1, alignItems: "center" }}>
            <Image source={props.img} />
            <Text style={{ color: 'white', fontSize: 12, marginTop: 10 }}>{props.title}</Text>
        </View>
    )
}
export default GopayFeature;