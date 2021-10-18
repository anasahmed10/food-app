import React, {useState} from 'react';
import {View, Text} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    console.log(results);

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price?.length === price;
        });
    };

    return (
        <View>
            <SearchBar 
            term = {term} 
            onTermChange = {setTerm}
            onTermSubmit={() => searchApi(term)}/>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
            <ResultsList results={filterResultsByPrice(1)} title = "Cost Effective" />
            <ResultsList results={filterResultsByPrice(2)} title = "Bit Pricier" />
            <ResultsList results={filterResultsByPrice(3)} title = "Big Spender" />
        </View>
    )
};

export default SearchScreen;