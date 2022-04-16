import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import SettingScreen from "./SettingScreen";
import {FontAwesome} from '@expo/vector-icons';
import RankingScreen from "./RankingScreen";
import SearchScreen from "./SearchScreen";
import RaceScreen from "./RaceScreen";

const Tab = createBottomTabNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Tab.Navigator
         screenOptions={({route }) => ({  
           // Navigator can be customized using screenOptions
            tabBarIcon: ({ focused, color, size }) => { 
              // Function tabBarIcon is given the focused state,
              // color and size params
              let iconName;
              if (route.name === 'Home') {
                  iconName = 'home';}
              else if (route.name ==='Ranking'){
                iconName= 'list-ol';}
              else if (route.name === 'Search'){
                iconName='search'
              }
              else if (route.name === 'Race'){
                iconName='flag-checkered'
              }
              else if (route.name === 'Settings') {
                  iconName = 'cog';}
              return <FontAwesome name={iconName} size={size} color={'red'} />;   
              //it returns an icon component          
              },
              })}>

        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Ranking" component={RankingScreen}/>
        <Tab.Screen name="Search" component={SearchScreen}/>
        <Tab.Screen name="Race" component={RaceScreen}/>
        <Tab.Screen name="Settings" component={SettingScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
