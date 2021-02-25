import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

import AppNavigator from './AppNavigation'

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <View style={{ flex: 1}}>
          {/*Appnavigator to hold the whole navigation layer*/}

          <AppNavigator/>

        </View>
      </View>
    )
  }
}