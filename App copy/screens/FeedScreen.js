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
import FeedComponent from "../components/FeedComponents/FeedComponent";


export default class FeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <LinearGradient colors={['#232526', '#414345']} start={[1.0,1.0]} style={{flex: 1}} > 
          <Text style={styles.header}>Nyheder</Text>
          <ScrollView>
              <FeedComponent header="Arbejdsdagen er startet" image={require("../assets/testasset/article.jpeg")} navigate={this.props.navigation} page="Profil"/>
              <FeedComponent header="Idris Ibrahim byder velkommen" image={require("../assets/testasset/562943.jpg")} navigate={this.props.navigation} page="Profil"/>
              <FeedComponent header="Adidas udgiver ny bold" image={require("../assets/testasset/562943.jpg")} navigate={this.props.navigation} page="Profil"/>
          </ScrollView>
        </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20
  },
  nameText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'grey',
  },
  gradient: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginTop: wp(15),
    marginBottom: 10
  },
});
