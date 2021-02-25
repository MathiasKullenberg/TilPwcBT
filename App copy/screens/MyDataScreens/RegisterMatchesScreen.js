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

export default class RegisterMartchesScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  
  
  render() {
    return (
      <LinearGradient colors={['#232526', '#414345']} start={[1.0,1.0]} style={{flex: 1}} > 
        <Text style={styles.header}>PersonalAdjustmentScreen</Text>
        <ScrollView>
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
