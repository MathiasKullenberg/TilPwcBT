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
import MyDataButton from "../components/MyDataComponents/MyDataButton"
import { MaterialCommunityIcons} from 'react-native-vector-icons';

export default class MyDataScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  
  
  render() {
    return (
      <LinearGradient colors={['#232526', '#414345']} start={[0.5,0.5]} style={{flex: 1}} > 
          <Text style={styles.header}>MyData</Text>
          <Text style={styles.name}>Morten Jensen{/*SKAL ERSTATTES MED BRUGERS NAVN*/}</Text>
          <ScrollView
            style={{}}
            contentContainerStyle={styles.container1}
          >
            <MyDataButton title="MyData" navigate={this.props.navigation} page="MyDataDetail"/>
            <MyDataButton title="Mine kampe" navigate={this.props.navigation} page="MyMatches"/>
            <MyDataButton title="Indtast kampe" navigate={this.props.navigation} page="RegisterMatches"/>
            <MyDataButton title="Min periode" navigate={this.props.navigation} page="MyPeriod"/>
            <MyDataButton title="Se din udvikling" navigate={this.props.navigation} page="Development"/>
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
