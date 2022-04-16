import React from 'react';
import { View, Text } from 'react-native';
import {SearchBar} from '@rneui/themed';
import { useState } from 'react';


export default function SearchScreen() {
    const [search, setSearch] = useState('');

    return (
      <View>
        <SearchBar
            placeholder='Search for some driver'
            onChangeText={text=>setSearch(text)}
            value={search}
            round={true}
            inputStyle={{color:'#E6E6E6'}}
            
        />
      </View>
    );
};