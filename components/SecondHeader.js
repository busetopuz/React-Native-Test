import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const SecondHeader=()=>{
    return(
        <View style={{backgroundColor: "#484848", height: "9%", 
        flexDirection:"row",padding:"3%", justifyContent: 'flex-start', alignItems: 'center'}}>
            <Text style={{color:"white", fontSize: 23,fontWeight:'normal' }}>Popüler Başlıklar</Text>
        </View>
    )

}

export default SecondHeader;