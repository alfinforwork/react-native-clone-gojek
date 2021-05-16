import React from "react";
import { View, TextInput, Image } from "react-native";

const SearchFeature = () => {
    return (
        <View style={{ marginHorizontal: 17, flexDirection: 'row', marginTop: 10 }}>
            <View style={{ position: 'relative', flex: 1 }}>
                <TextInput placeholder="Wat do you want to eat?" style={{ borderWidth: 1, borderColor: '#e8e8e8', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white', marginRight: 10, }} />
                <Image source={require('../../../assets/icon/search.png')} style={{ position: 'absolute', top: 5, left: 10 }} />
            </View>
            <View style={{ width: 35, alignItems: "center", justifyContent: "center" }} >
                <Image source={require('../../../assets/icon/promo.png')} />
            </View>
        </View>
    )
}

export default SearchFeature;