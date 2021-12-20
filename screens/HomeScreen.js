import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Button } from 'react-native';
import Category from "../components/Category";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SecondHeader from "../components/SecondHeader";

const HomeScreen = ({navigation}) => {

    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <Header />
            <SecondHeader />
            <Category image={require('../assets/jumanji.png')} text={"Film"} navigation={navigation} 
            />
            <Category image={require('../assets/theWitcher.jpg')} text={"Dizi"} navigation={navigation}  />
            <Footer />
        </View>

    );

}


export default HomeScreen;