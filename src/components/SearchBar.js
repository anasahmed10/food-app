import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style = {styles.backgroundStyle}>
            <FontAwesome name= "search" size= {35} color= "black" style={styles.iconStyle} />
            <TextInput
            style={styles.inputStyle}
            autoCorrect={false}
            autoCapitalize="none"
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            placeholder = "Search" 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        marginTop: 10,
        height: 50,
        borderRadius: 50,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        borderColor: 'black',
        flex: 1,
        fontSize: 18
    }, 
    iconStyle: {
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;