import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import ResultsSingle from './ResultsSingle';

const ResultsList = ({title, results}) => {
    return (
        <View>
            <Text style = {styles.title}>{title}</Text>
            <FlatList
            horizontal = {true}
            data = {results}
            keyExtractor={results => results.id}
            renderItem={({item}) => {
                return <ResultsSingle result = {item}/>;
            }}>
            </FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultsList;

