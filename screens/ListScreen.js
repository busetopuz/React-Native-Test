import React, { useState, useEffect } from "react";
import { View, Text, ScrollView,StyleSheet } from 'react-native';
import Footer from "../components/Footer";
import Header from "../components/Header";
import SecondHeader from "../components/SecondHeader";
import { SelectCountry } from 'react-native-element-dropdown';
import SearchBar from "../components/SearchBar";


const ListScreen = () => {
    

    //deneme
    const [select, setSelect] = useState('1');

    const local_data = [

        {
            value: '2',
            lable: 'Yeniye Göre Sırala',

        },
        {
            value: '3',
            lable: 'Eskiye Göre Sırala',

        },
        {
            value: '4',
            lable: 'Puana Göre Sırala',

        },
        {
            value: '5',
            lable: 'Rastgele Sırala',

        },

    ];


    return (
        <View style={{ flex: 1 }}>
            <Header />
            <SecondHeader />
            <SearchBar/>
            <ScrollView>
                <SelectCountry
                    style={styles.dropdown}
                    selectedTextStyle={styles.selectedTextStyle}
                    placeholderStyle={styles.placeholderStyle}
                    imageStyle={styles.imageStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    maxHeight={200}
                    value={select}
                    data={local_data}
                    valueField="value"
                    labelField="lable"
                    placeholder="Sırala"
                    onChange={e => {
                        setSelect(e.value);
                    }}
                />
            </ScrollView>
            <Footer />
        </View>
    );
}
const styles = StyleSheet.create({
    dropdown: {
        margin: 16,
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 10
    },
    
    placeholderStyle: {
        fontSize: 16,
        textAlign: "center",
        marginLeft: "8%",
    },
    selectedTextStyle: {
        fontSize: 16,
        marginLeft: "8%",
        textAlign: "center"
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});

export default ListScreen;
