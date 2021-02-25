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

export default class FeedDetailScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  
  
  render() {
    return (
      <View style={styles.container}>
      <ImageBackground source={require('../../assets/testasset/test.jpg')} style={styles.image}>
          <Text style={styles.header}>Nutrition</Text>
          <Text style={styles.name}>Morten Jensen{/*SKAL ERSTATTES MED BRUGERS NAVN*/}</Text>
          <ScrollView
            style={{}}
            contentContainerStyle={styles.container1}
          >
          </ScrollView>
      </ImageBackground> 
      </View>
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
