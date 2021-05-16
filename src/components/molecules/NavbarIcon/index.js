import React from "react";
import { View, Image, Text } from "react-native";

const NavbarIcon = (props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={props.img} style={{ width: 26, height: 26 }} />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4, color: props.active?'#43ab4a':'grey' }}>{props.title}</Text>
        </View>
    )
}
export default NavbarIcon;