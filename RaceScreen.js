import React from "react";
import { View, Text, Image } from "react-native";
import { useState, useEffect } from "react";
import { FlatList } from 'react-native';
import { ListItem } from '@rneui/themed';
import { Card } from "react-native-elements";
import { format, parseISO } from "date-fns";


export default function RaceScreen() {
  const [expanded, setExpanded] = useState("");
  const [open, setOpen] = useState(false);
  const [competitions, setCompetitions] = useState([]);

  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com',
        'X-RapidAPI-Key': '5fe71208f7msh132e9373f339ab5p1531b9jsnba3e51286fd6'
      }
    };

    fetch('https://api-formula-1.p.rapidapi.com/races?type=race&timezone=Europe%2FHelsinki&season=2022', options)
    .then(response => response.json())
    .then(data => setCompetitions(data.response))
    .catch(err => console.error(err));
  },[])
  
  const handleOpen = (id)=>{
    setExpanded(id)
    setOpen(!open)
  }

  const renderRaceItem = ({ item }) => (
   <ListItem.Accordion
   content={
     <>
       <ListItem.Content>
       <ListItem.Title style={{ color: "#03BFB5", fontSize:20, fontWeight:'900' }}>
           {item.competition.name}
         </ListItem.Title>
         <ListItem.Subtitle style={{ color: 'black', fontSize:16}}>{item.competition.location.city}, {item.competition.location.country}</ListItem.Subtitle>
       </ListItem.Content>
     </>
   }
   isExpanded={expanded===item.competition.id && open}
    onPress={() => {
    handleOpen(item.competition.id)
  }}
   >
    {
      <Card>
        <Card.Title>More information</Card.Title>
        <Text style={{textAlign:"center"}}>{item.status} / {format(parseISO(item.date), 'dd-MM-yyyy HH:MM')}</Text>
        <Card.Divider/>
        <Card.Image style={{padding:0, resizeMode:'contain'}} source={{uri:item.circuit.image}}/>
        <View style={{marginTop:15}}>
        <Text>Laps: {item.laps.total} </Text>
        <Text style={{marginTop:-17.5,textAlign:"right"}}>Length: {item.distance}</Text>

        </View>
      </Card>
    }
   </ListItem.Accordion>
  );




  // const renderRaceItem = ({ item }) => (
  //   <ListItem 
  //     containerStyle={{backgroundColor:'#121212'}}
  //     bottomDivider={true}
  //   >
  //     <ListItem.Content>
  //       <ListItem.Title style={{ color: "red", fontSize:20, fontWeight:'900' }}>
  //         {item.competition.name}
  //       </ListItem.Title>
  //       <ListItem.Subtitle style={{ color: '#E6E6E6', fontSize:16}}>{item.competition.location.city}, {item.competition.location.country}</ListItem.Subtitle>
  //     </ListItem.Content>
      
  //   </ListItem>
  // );

  return (

    <View>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderRaceItem}
        data={competitions}
      />
    </View>
  );
}
