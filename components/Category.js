import React from "react";
import { Text, View, TouchableOpacity, Image } from 'react-native';

const Category = ({ image ,text, navigation,key} ) => {
    return (
        
        <View>
            <TouchableOpacity style={{ borderRadius: 20, borderWidth: 1, borderColor: 'black', alignSelf: "center", marginTop: 20, }}
             onPress={()=> navigation.navigate('ListScreen', {key})}>
                <Image source={image} style={{ width: 160, height: 160, borderRadius: 20 }} resizeMode="cover" />
            </TouchableOpacity> 
            <Text style={{textAlign:"center",fontSize:13, marginTop:'3%'}}> {text}</Text>
        </View>


    );
}

export default Category;