import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";

import {FontAwesome} from '@expo/vector-icons';
import RankingScreen from "./RankingScreen";

import RaceScreen from "./RaceScreen";
import NewsScreen from "./NewsScreen";

const Tab = createBottomTabNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Tab.Navigator

         screenOptions={({route}) => ({  
           // Navigator can be customized using screenOptions
           headerStyle:{backgroundColor:'#004146'},
           headerTitleStyle:{color:'#EFF5F9', paddingBottom:'2%'},
           tabBarStyle:{backgroundColor:'#004146', height:'11%', paddingBottom:15},
           tabBarBadgeStyle:'#03BFB5',
           tabBarIconStyle:{marginTop:10},
           
           
          
            tabBarIcon: ({ focused, color, size }) => { 
              // Function tabBarIcon is given the focused state,
              // color and size params
              let iconName;
              if (route.name === 'Home') {
                  iconName = 'home';}
              else if (route.name ==='Ranking'){
                iconName= 'list-ol';}
              else if (route.name === 'News'){
                iconName='newspaper-o'
              }
              else if (route.name === 'Race'){
                iconName='flag-checkered'
              }
              return <FontAwesome name={iconName} size={size} color={'#EFF5F9'} />;   
              //it returns an icon component          
              },
              tabBarInactiveTintColor:'#EFF5F9',
              tabBarActiveTintColor:'#03BFB5',
              })
              }>

        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Ranking" component={RankingScreen}/>
        <Tab.Screen name="News" component={NewsScreen}/>
        <Tab.Screen name="Race" component={RaceScreen}/>
        

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#444444",
    alignItems: "center",
    justifyContent: "center",
  },
});
