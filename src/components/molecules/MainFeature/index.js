import React from "react";
import { View, Image, Text } from "react-native";

const MainFeature = (props) => {
    return (
        <View style={{ width: '25%', alignItems: "center" }} >
            <View style={{ width: 50, height: 50, borderWidth: 1, borderColor: '#efefef', borderRadius: 10, justifyContent: "center", alignItems: 'center' }}>
                <Image source={props.img} />
            </View>
            <Text style={{ fontSize: 12, fontWeight: "bold", textAlign: "center", marginTop: 7 }}>{ props.title }</Text>
        </View>
    )
}

export default MainFeature;