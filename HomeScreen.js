import React from 'react';
import { View, Text, SafeAreaView, ScrollView, } from 'react-native';
import { Card, ListItem } from "@rneui/themed";
import { useState, useEffect } from 'react';

import { format, parseISO } from "date-fns";
import { Avatar } from 'react-native-elements';




export default function HomeScreen() {
    const [firstTeam, setFirstTeam] = useState(
        {
            "points": 157,
            "position": 1,
            "season": 2022,
            "team": {
              "id": 3,
              "logo": "https://media.api-sports.io/formula-1/teams/3.png",
              "name": "Scuderia Ferrari",
            }
        })
    const [firstDriver, setFirstDriver] = useState(
        {
            "behind": null,
            "driver": {
              "abbr": "LEC",
              "id": 34,
              "image": "https://media.api-sports.io/formula-1/drivers/34.png",
              "name": "Charles Leclerc",
              "number": 16,
            },
            "points": 104,
            "position": 1,
            "season": 2022,
            "team": {
              "id": 3,
              "logo": "https://media.api-sports.io/formula-1/teams/3.png",
              "name": "Scuderia Ferrari",
            },
            "wins": null,
          }
    );
    const [nextRace, setNextRace] = useState(

              {
                "circuit":{
                  "id": 6,
                  "image": "https://media.api-sports.io/formula-1/circuits/6.png",
                  "name": "Circuit de Barcelona-Catalunya",
                },
                "competition":{
                  "id": 6,
                  "location":{
                    "city": " Montmeló",
                    "country": "Spain",
                  },
                  "name": "Spain Grand Prix",
                },
                "date": "2022-05-22T16:00:00+03:00",
                "distance": "307.6 Kms",
                "fastest_lap": {
                  "driver": {
                    "id": null,
                  },
                  "time": null,
                },
                "id": 1513,
                "laps": {
                  "current": null,
                  "total": 66,
                },
                "season": 2022,
                "status": "Scheduled",
                "timezone": "Europe/Helsinki",
                "type": "Race",
                "weather": null,
              }
            
    
    );


    //fetching top 1 team

    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com',
    //         'X-RapidAPI-Key': '5fe71208f7msh132e9373f339ab5p1531b9jsnba3e51286fd6'
    //     }
    // };
    
    // fetch('https://api-formula-1.p.rapidapi.com/rankings/teams?season=2022', options)
    //     .then(response => response.json())
    //     .then(data => setFirstTeam(data.response[0]))
    //     .catch(err => console.error(err));

    //fetching top 1 driver

    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com',
    //         'X-RapidAPI-Key': '5fe71208f7msh132e9373f339ab5p1531b9jsnba3e51286fd6'
    //     }
    // };
    
    // fetch('https://api-formula-1.p.rapidapi.com/rankings/drivers?season=2022', options)
    //     .then(response => response.json())
    //     .then(data => setFirstDriver(data.response[0]))
    //     .catch(err => console.error(err));

    //fetching next race

    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com',
    //         'X-RapidAPI-Key': '5fe71208f7msh132e9373f339ab5p1531b9jsnba3e51286fd6'
    //     }
    // };
    
    // fetch('https://api-formula-1.p.rapidapi.com/races?type=race&timezone=Europe%2FHelsinki&season=2022&next=1', options)
    //     .then(response => response.json())
    //     .then(data => setNextRace(data.response))
    //     .catch(err => console.error(err));


    return (
      <SafeAreaView>
        {/* <Text style={{fontSize:20, marginLeft:20, marginTop:10, fontWeight:'700'}}>Next Race: {format(parseISO(nextRace.date), 'dd-MM-yyyy HH:MM')}</Text> */}
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
