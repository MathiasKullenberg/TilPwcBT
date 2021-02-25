import 'react-native-gesture-handler';
import React from "react";

//IMPORT MAINSCREENS
import Feed from "./screens/FeedScreen";
import MyData from "./screens/MyDataScreen";
import MyTalento from "./screens/MyTalentoScreen";
import Profile from "./screens/ProfileScreen";

//IMPORT MYTALENTOSCREENS
import MyWeek from "./screens/MyTalentoScreens/MyWeekScreen2";
import BookSession from "./screens/MyTalentoScreens/BookSessionScreen";
import Chat from "./screens/MyTalentoScreens/ChatScreen";
import MyProVideos from "./screens/MyTalentoScreens/MyProVideosScreen";
import Nutrition from "./screens/MyTalentoScreens/NutritionScreen";
import PersonalAdjustment from "./screens/MyTalentoScreens/PersonalAdjustmentScreen";

//IMPORT MY DATASCREENS
import Development from "./screens/MyDataScreens/DevoplopmentScreen";
import MyDataDetail from "./screens/MyDataScreens/MyDataDetailScreen";
import MyMathces from "./screens/MyDataScreens/MyMatchesScreen";
import MyPeriod from "./screens/MyDataScreens/MyPeriodScreen";
import RegisterMatches from "./screens/MyDataScreens/RegisterMatchesScreen";

import { Image, Text, View, Linking, Platform  } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons} from 'react-native-vector-icons';




const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const FeedStack = () => (
  <Stack.Navigator
    initialRouteName="Feed"
    >
    <Stack.Screen
      name="Feed"
      component={Feed}
      options={{
        headerShown: false,
        }}
    />
  </Stack.Navigator>

)

const MyDataStack = () => (
  <Stack.Navigator
    initialRouteName="MyData"
    >
    <Stack.Screen
      name="MyData"
      component={MyData}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="MyDataDetail"
      component={MyDataDetail}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="MyMatches"
      component={MyMathces}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="MyPeriod"
      component={MyPeriod}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="RegisterMatches"
      component={RegisterMatches}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Development"
      component={Development}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
)

const MyTalentoStack = () => (
  <Stack.Navigator
  transitionSpec={{
    open: config,
    close: config
  }}>
    <Stack.Screen
      name="MyTalento"
      component={MyTalento}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="MyWeek"
      component={MyWeek}
      options={{
        headerShown: true,
        title: 'MyWeek',
          headerStyle: {
            backgroundColor: '#232526',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
    />
    <Stack.Screen
      name="BookSession"
      component={BookSession}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Chat"
      component={Chat}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="MyProVideos"
      component={MyProVideos}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Nutrition"
      component={Nutrition}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="PersonalAdjustment"
      component={PersonalAdjustment}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
)

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profil"
      component={Profile}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
)



function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#f0edf6"
      inactiveColor="#414345"
      barStyle={{ backgroundColor: '#232526' }}
      screenOptions={{
        gestureEnabled: true,
        gestureDirection:'horizontal'
      }}
      >
      <Tab.Screen 
        name="Feed" 
        component={FeedStack} 
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="newspaper" color={color} size={26} />
          ),
         }}
      />
      <Tab.Screen 
        name="MyData" 
        component={MyDataStack} 
        options={{
          tabBarLabel: 'MyData',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chart-donut" color={color} size={26} />
          ),
         }}
      />
      <Tab.Screen 
        name="MyTalento" 
        component={MyTalentoStack} 
        options={{
          tabBarLabel: 'MyTalento',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="soccer" color={color} size={26} />
          ),
         }}
      />
      <Tab.Screen 
        name="Profil" 
        component={ProfileStack} 
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
         }}
      />
    </Tab.Navigator>
  );
}






import { AppRegistry } from 'react-native';
AppRegistry.registerComponent('TalentoApp', () => App);

export default () => (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  
)