import React from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';



const SearchBar = () => {
    return (
        <View style={styles.background}>
            <TextInput style={styles.textStyle}
                placeholder="Film / Dizi / Oyuncu Ara" placeholderTextColor={"black"}>
            </TextInput>
        </View>
    );

}

const styles = StyleSheet.create({
    background: {
        margin: 16,
        height: 50,
        borderWidth: 0.5,
        borderRadius: 10
    },

    textStyle: {
        textAlign: 'center',
        marginLeft: "8%",
        padding: '4%',
        fontSize: 16,
        color: 'black'
    }
});

export default SearchBar;