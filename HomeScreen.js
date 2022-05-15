import React from 'react';
import { View, Text, SafeAreaView, ScrollView, } from 'react-native';
import { Card, ListItem } from "@rneui/themed";
import { useState, useEffect } from 'react';

import { format, parseISO } from "date-fns";
import { Avatar } from 'react-native-elements';


export default function HomeScreen() {
    const [firstTeam, setFirstTeam] = useState(
        {
            "points": 0,
            "position":0,
            "season": 0,
            "team": {
              "id": 0,
              "logo": "",
              "name": "",
            }
        });

    const [firstDriver, setFirstDriver] = useState(
        {
            "behind": null,
            "driver": {
              "abbr": "",
              "id": 0,
              "image": " ",
              "name": "",
              "number": 16,
            },
            "points": 0,
            "position": 0,
            "season": 0,
            "team": {
              "id": 0,
              "logo": "",
              "name": "",
            },
            "wins": null,
          }
    );
    const [nextRace, setNextRace] = useState(

              {
                "circuit":{
                  "id": 0,
                  "image": " ",
                  "name": "",
                },
                "competition":{
                  "id": 0,
                  "location":{
                    "city": " ",
                    "country": "",
                  },
                  "name": "",
                },
                "date": "2022-05-22T16:00:00+03:00",
                "distance": "",
                "fastest_lap": {
                  "driver": {
                    "id": null,
                  },
                  "time": null,
                },
                "id": 0,
                "laps": {
                  "current": null,
                  "total": 0,
                },
                "season": 0,
                "status": "",
                "timezone": "Europe/Helsinki",
                "type": "",
                "weather": null,
              }
            
    
    );

    //fetching top 1 team
useEffect(()=>{

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com',
            'X-RapidAPI-Key': '5fe71208f7msh132e9373f339ab5p1531b9jsnba3e51286fd6'
        }
    };
    
    fetch('https://api-formula-1.p.rapidapi.com/rankings/teams?season=2022', options)
        .then(response => response.json())
        .then(data => setFirstTeam(data.response[0]))
        .catch(err => console.error(err));
},[])

    //fetching top 1 driver
useEffect(()=>{

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com',
            'X-RapidAPI-Key': '5fe71208f7msh132e9373f339ab5p1531b9jsnba3e51286fd6'
        }
    };
    
    fetch('https://api-formula-1.p.rapidapi.com/rankings/drivers?season=2022', options)
        .then(response => response.json())
        .then((data) => setFirstDriver(data.response[0]))
        .catch(err => console.error(err));
},[])

    //fetching next race
useEffect(()=>{

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com',
            'X-RapidAPI-Key': '5fe71208f7msh132e9373f339ab5p1531b9jsnba3e51286fd6'
        }
    };
    
    fetch('https://api-formula-1.p.rapidapi.com/races?type=race&timezone=Europe%2FHelsinki&season=2022&next=1', options)
        .then(response => response.json())
        .then(data => setNextRace(data.response[0]))
        .catch(err => console.error(err));
},[])


    return (
      <SafeAreaView>
        <ScrollView>
          <Card
            containerStyle={{
                flex:1,
              backgroundColor: "#02968b",
              borderRadius: 25,
              height: "47%",
            }}
            wrapperStyle={{
              backgroundColor: "#EFF5F9",
              borderRadius: 25,
              height: "102%",
              marginTop: -3,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                marginLeft: 18,
                marginTop: 10,
                fontWeight: "700",
                color: "#504f52",
              }}
            >
              Next race: {format(parseISO(nextRace.date), "dd/MM/yyyy HH:MM")}
            </Text>
            <Card.FeaturedTitle
              style={{
            
                fontSize: 24,
                marginTop: 15,
                color: "#03BFB5",
                marginLeft: "5%",
                marginTop: "4%",
              }}
            >
              {nextRace.competition.name}
            </Card.FeaturedTitle>
            <Card.FeaturedSubtitle
              style={{
                fontSize: 18,
                color: "#504f52",
                marginLeft: "5%",
                marginTop: -6,
              }}
            >
              {nextRace.circuit.name}
            </Card.FeaturedSubtitle>
            <Text
              style={{
                marginLeft: "5%",
                color: "#504f52",
                marginTop: -6,
                marginBottom: "2%",
              }}
            >
              {nextRace.competition.location.city},{" "}
              {nextRace.competition.location.country}
            </Text>
            <Card.Image
              source={{
                uri: "https://images.unsplash.com/photo-1491659015174-15b37116b4a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              }}
            />
            <Text style={{ marginTop: "2%", marginBottom:'2%', marginLeft: 15, color: "#504f52" }}>
              Distance: {nextRace.distance}                             Laps: {nextRace.laps.total}
            </Text>
          </Card>

          <Card
            containerStyle={{
                flex:1,
              backgroundColor: "#02968b",
              borderRadius: 25,
              height: "27%",
              marginTop: 10,
            }}
            wrapperStyle={{
              backgroundColor: "#EFF5F9",
              borderRadius: 25,
              height: "102%",
              marginTop: -3,
            }}
          >
            <Card.FeaturedTitle
              style={{
                fontSize: 24,
                marginTop: 10,
                color: "#03BFB5",
                marginLeft: "5%",
                marginTop: "4%",
              }}
            >
              TOP 1 DRIVER
            </Card.FeaturedTitle>
            <ListItem style={{marginLeft:10, marginRight:10, marginBottom:20}}>

            <Avatar
                resizeMode='contain'
                size={'large'}
                source={{
                uri: firstDriver.driver.image,
              }}
            />
            <ListItem.Content style={{marginLeft:30}}>
              <ListItem.Title>
                <Text>{firstDriver.driver.name}</Text>
              </ListItem.Title>
              <ListItem.Subtitle>

            <Text>{firstDriver.team.name}</Text>
              </ListItem.Subtitle>
                <ListItem.Subtitle>
                <Text> Points: {firstDriver.points}</Text>
                </ListItem.Subtitle>
              
            </ListItem.Content>
            </ListItem>
          </Card>

          <Card
            containerStyle={{
                flex:1,
              backgroundColor: "#02968b",
              borderRadius: 25,
              height: "30%",
              marginTop: 10,
              marginBottom:10
            }}
            wrapperStyle={{
              backgroundColor: "#EFF5F9",
              borderRadius: 25,
              height: "102%",
              marginTop: -3,
            }}
          >
            <Card.FeaturedTitle
              style={{
                fontSize: 24,
                marginTop: 15,
                color: "#03BFB5",
                marginLeft: "5%",
                marginTop: "2%",
              }}
            >
              Top 1 TEAM
            </Card.FeaturedTitle>
            <ListItem style={{marginLeft:10, marginRight:10, marginBottom:20}}>

            <Avatar
                resizeMode='contain'
                size={'large'}
                source={{
                uri: firstTeam.team.logo,
              }}
            />
            <ListItem.Content style={{marginLeft:30}}>
              <ListItem.Title>
                <Text>{firstTeam.team.name}</Text>
              </ListItem.Title>
              <ListItem.Subtitle>

            <Text>Points: {firstTeam.points}</Text>
              </ListItem.Subtitle>
            </ListItem.Content>
            </ListItem>
          </Card>
        </ScrollView>
      </SafeAreaView>
    );
};
