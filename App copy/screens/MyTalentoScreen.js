import React, { Component, PureComponent } from "react";
import {LinearGradient} from 'expo-linear-gradient'
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Linking,
  AsyncStorage,
  RefreshControl,
  ImageBackground
} from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Button from "../components/Resuable/SquareButton"
import { MaterialCommunityIcons} from 'react-native-vector-icons';

export default class MyTalentoScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  
  
  render() {
    return (
      <LinearGradient colors={['#232526', '#414345']} start={[0.5,0.5]} style={{flex: 1}} >
          <Text style={styles.header}>MyTalento</Text>
          <Text style={styles.name}>Morten Jensen{/*SKAL ERSTATTES MED BRUGERS NAVN*/}</Text>
          <ScrollView
            style={{}}
            contentContainerStyle={styles.container1}
          >
            <Button title="MyWeek" image={require("../assets/testasset/football.png")} navigate={this.props.navigation} page="MyWeek"/>
            <Button title="MyProVideos" image={require("../assets/testasset/football.png")} navigate={this.props.navigation} page="MyProVideos"/>
            <Button title="Book forløb"  image={require("../assets/testasset/football.png")}  navigate={this.props.navigation} page="BookSession"/>
            <Button title="Kost & Ernæring" image={require("../assets/testasset/football.png")} navigate={this.props.navigation} page="Nutrition"/>
            <Button title="Personlig tilretning" image={require("../assets/testasset/football.png")} navigate={this.props.navigation} page="PersonalAdjustment"/>
            <Button title="Chat med en træner" image={require("../assets/testasset/football.png")} navigate={this.props.navigation} page="Chat" />
          </ScrollView>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  container1: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginTop: wp(15),
  },
  name: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 10
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
