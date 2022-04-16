import React from "react";
import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import { FlatList } from 'react-native';
import { ListItem, Avatar, ButtonGroup } from '@rneui/themed';

export default function RankingScreen() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [rankingDrivers, setRankingDrivers] = useState([]);
  const [rankingTeams, setRankingTeams] = useState([]);

  // fetching Drivers info
  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Host": "api-formula-1.p.rapidapi.com",
  //       "X-RapidAPI-Key": "5fe71208f7msh132e9373f339ab5p1531b9jsnba3e51286fd6",
  //     },
  //   };

  //   fetch(
  //     "https://api-formula-1.p.rapidapi.com/rankings/drivers?season=2022",
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setRankingDrivers(data.response))
  //     .catch((err) => console.error(err));
  // }, []);

  // // fetching Teams info
  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Host": "api-formula-1.p.rapidapi.com",
  //       "X-RapidAPI-Key": "5fe71208f7msh132e9373f339ab5p1531b9jsnba3e51286fd6",
  //     },
  //   };

  //   fetch(
  //     "https://api-formula-1.p.rapidapi.com/rankings/teams?season=2022",
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setRankingTeams(data.response))
  //     .catch((err) => console.error(err));
  // }, []);
 
  const renderDriverItem = ({ item }) => (
    <ListItem>
      <Avatar rounded size={'medium'} source={{ uri: item.driver.image }} />
      <ListItem.Content>
        <ListItem.Title style={{ color: "black" }}>
          {item.driver.name}
        </ListItem.Title>
        <ListItem.Subtitle>{item.team.name}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Content right>
        <ListItem.Title right style={{ color: "black", marginRight: "30%" }}>
          #{item.position}
        </ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
  const renderTeamItem = ({ item }) => (
    <ListItem>
      <Avatar style={{width:80, height:40,}} size={'small'} source={{ uri: item.team.logo }} />
      <ListItem.Content>
        <ListItem.Title style={{ color: "black" }}>
          {item.team.name}
        </ListItem.Title>
        <ListItem.Subtitle>Points: {item.points}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Content right>
        <ListItem.Title right style={{ color: "black", marginRight: "30%" }}>
          #{item.position}
        </ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
  return (
    <View>
      <ButtonGroup
        buttons={["Drivers", "Teams"]}
        selectedIndex={selectedIndex}
        onPress={(value) => {
          setSelectedIndex(value);
        }}
        containerStyle={{ marginBottom: 20 }}
      />
      {selectedIndex === 0 ? (
        <View style={{marginBottom:'35%'}}>
          <FlatList
            keyExtractor={(item) => item.driver.id.toString()}
            renderItem={renderDriverItem}
            data={rankingDrivers}
          />
        </View>
      ) : (
        <></>
      )}
      {selectedIndex === 1 ? (
        <View style={{marginBottom:'35%'}}>
          <FlatList
            keyExtractor={(item) => item.team.id.toString()}
            renderItem={renderTeamItem}
            data={rankingTeams}
          />
        </View>
      ) : (
        <></>
      )}
    </View>
  );
}