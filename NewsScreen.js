import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import RNUrlPreview from 'react-native-url-preview';
import { ListItem } from 'react-native-elements';


export default function NewsScreen() {
    const [news, setNews] = useState([]);
    
    useEffect(()=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'f1-news.p.rapidapi.com',
            'X-RapidAPI-Key': '5fe71208f7msh132e9373f339ab5p1531b9jsnba3e51286fd6'
        }
    };
    
    fetch('https://f1-news.p.rapidapi.com/news', options)
        .then(response => response.json())
        // cut the lenght of the news array to avoid react performance issues
        .then(data => newsFiltering(data.slice(0,100)))
        .catch(err => console.error(err));
  
    
    },[])

    // removing the repetitive news that where fetch from the api
    const newsFiltering = (newsArray)=>{
      let filteredNews = newsArray.filter((o)=>{return o.title!=="F1"})
      setNews(filteredNews) 
    }
    
    const renderNewsItem = ({ item }) => (
        <ListItem>
     
        <ListItem.Content>
        <RNUrlPreview text={item.url}/>
        </ListItem.Content>
        
      </ListItem>
       );
    
    return (
      <View>
       <FlatList
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderNewsItem}
        data={news}
      />
      </View>
    );
};