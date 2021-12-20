import React from "react";
import {View, Text, TouchableOpacity, Image} from 'react-native';

const Footer =()=>{
    return(
        <View style={{backgroundColor: "black", height: "15%" , alignItems: 'center', justifyContent:'space-around',
        }}>
            <View style={{flexDirection:'row',justifyContent: "space-around",alignItems:"center",width:"100%"}}>
            <TouchableOpacity>
            <Text style={{color:"white", fontSize: 16}}>Anasayfa |</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{color:"white", fontSize: 16}}>Kullanıcı Sözleşmesi |</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{color:"white", fontSize: 16}}>Gizlilik Sözleşmesi</Text>
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", justifyContent:'space-around', width:'25%'}}>
            <TouchableOpacity>
            <Image source={require('../assets/facebookLogo.png')} style={{height:30, width:17}}/> 
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={require('../assets/twitterLogo.png')} style={{height:30, width:32}}/> 
            </TouchableOpacity>
            </View>
            

        </View>
        
    );
}

export default Footer;