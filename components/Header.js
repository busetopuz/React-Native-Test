import React from "react";
import {Text, View, TouchableOpacity} from 'react-native';

const Header = ()=> {
    return(
        <View style={{backgroundColor: "black", height: "10%" , alignItems: 'center',
         justifyContent: "space-between",flexDirection:"row",padding:"3%"}}>
            <Text style={{fontSize: 25, color: "white" }}>BulutMD</Text>
            <TouchableOpacity style={{backgroundColor: 'red', color: 'white',height:40,
            width:150,borderColor:"gray",borderWidth:1, justifyContent:'center'}} > 
            <Text style={{color: "white", fontSize: 16, alignSelf: 'center' }}>Deneme Başlat</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Header;