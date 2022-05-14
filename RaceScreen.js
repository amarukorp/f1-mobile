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
  const [competitions, setCompetitions] = useState([
    //  {
    //   "circuit":  {
    //     "id": 2,
    //     "image": "https://media.api-sports.io/formula-1/circuits/2.png",
    //     "name": "Bahrain International Circuit",
    //   },
    //   "competition":  {
    //     "id": 2,
    //     "location":  {
    //       "city": "Sakhir",
    //       "country": "Bahrain",
    //     },
    //     "name": "Bahrain Grand Prix",
    //   },
    //   "date": "2022-03-20T17:00:00+02:00",
    //   "distance": "307.6 Kms",
    //   "fastest_lap":  {
    //     "driver":  {
    //       "id": 34,
    //     },
    //     "time": "1:35.558",
    //   },
    //   "id": 1488,
    //   "laps":  {
    //     "current": null,
    //     "total": 58,
    //   },
    //   "season": 2022,
    //   "status": "Completed",
    //   "timezone": "Europe/Helsinki",
    //   "type": "Race",
    //   "weather": null,
    // },
    //  {
    //   "circuit":  {
    //     "id": 29,
    //     "image": "https://media.api-sports.io/formula-1/circuits/29.png",
    //     "name": "Jeddah Corniche Circuit",
    //   },
    //   "competition":  {
    //     "id": 32,
    //     "location":  {
    //       "city": "Djeddah",
    //       "country": "Saudi Arabia ",
    //     },
    //     "name": "Saudi Arabia Grand Prix",
    //   },
    //   "date": "2022-03-27T20:00:00+03:00",
    //   "distance": "307.6 Kms",
    //   "fastest_lap":  {
    //     "driver":  {
    //       "id": 34,
    //     },
    //     "time": "1:31.634",
    //   },
    //   "id": 1493,
    //   "laps":  {
    //     "current": null,
    //     "total": 58,
    //   },
    //   "season": 2022,
    //   "status": "Completed",
    //   "timezone": "Europe/Helsinki",
    //   "type": "Race",
    //   "weather": null,
    // },
    //  {
    //   "circuit":  {
    //     "id": 1,
    //     "image": "https://media.api-sports.io/formula-1/circuits/1.png",
    //     "name": "Melbourne Grand Prix Circuit",
    //   },
    //   "competition":  {
    //     "id": 1,
    //     "location":  {
    //       "city": "Melbourne",
    //       "country": "Australia",
    //     },
    //     "name": "Australia Grand Prix",
    //   },
    //   "date": "2022-04-10T08:00:00+03:00",
    //   "distance": "307.6 Kms",
    //   "fastest_lap":  {
    //     "driver":  {
    //       "id": 34,
    //     },
    //     "time": "1:21.868",
    //   },
    //   "id": 1498,
    //   "laps":  {
    //     "current": null,
    //     "total": 58,
    //   },
    //   "season": 2022,
    //   "status": "Completed",
    //   "timezone": "Europe/Helsinki",
    //   "type": "Race",
    //   "weather": null,
    // },
    //  {
    //   "circuit":  {
    //     "id": 27,
    //     "image": "https://media.api-sports.io/formula-1/circuits/27.png",
    //     "name": "Autodromo Enzo e Dino Ferrari",
    //   },
    //   "competition":  {
    //     "id": 29,
    //     "location":  {
    //       "city": "Imola",
    //       "country": "Italy",
    //     },
    //     "name": "Emilia Romagna Grand Prix",
    //   },
    //   "date": "2022-04-24T16:00:00+03:00",
    //   "distance": "307.6 Kms",
    //   "fastest_lap":  {
    //     "driver":  {
    //       "id": null,
    //     },
    //     "time": null,
    //   },
    //   "id": 1503,
    //   "laps":  {
    //     "current": null,
    //     "total": 62,
    //   },
    //   "season": 2022,
    //   "status": "Scheduled",
    //   "timezone": "Europe/Helsinki",
    //   "type": "Race",
    //   "weather": null,
    // },
    //  {
    //   "circuit":  {
    //     "id": 31,
    //     "image": "https://media.api-sports.io/formula-1/circuits/31.png",
    //     "name": "Miami International Autodrome",
    //   },
    //   "competition":  {
    //     "id": 34,
    //     "location":  {
    //       "city": "Miami",
    //       "country": "USA",
    //     },
    //     "name": "Miami Grand Prix",
    //   },
    //   "date": "2022-05-08T22:30:00+03:00",
    //   "distance": "307.6 Kms",
    //   "fastest_lap":  {
    //     "driver":  {
    //       "id": null,
    //     },
    //     "time": null,
    //   },
    //   "id": 1508,
    //   "laps":  {
    //     "current": null,
    //     "total": 57,
    //   },
    //   "season": 2022,
    //   "status": "Scheduled",
    //   "timezone": "Europe/Helsinki",
    //   "type": "Race",
    //   "weather": null,
    // }
  ]);


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
