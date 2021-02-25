import React, { Component, PureComponent } from "react";
import {LinearGradient} from 'expo-linear-gradient'
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Linking,
  AsyncStorage,
  RefreshControl
} from "react-native";
import { heightPercentageToDP, widthPercentageToDP as wp } from "react-native-responsive-screen";
import ProfileImage from "../components/ProfilComponents/ProfileImage";



export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      auth: "",
      name: "Loading...",
      firstName: "Loading...",
      lastName: "Loading...",
      email: "Loading...",
      userId: ""
    };
  }


  renderProfileImage() {
      return <ProfileImage DefaultImage={true} />;
    }
  

  render() {
    return (
      <LinearGradient colors={['#232526', '#414345']} start={[0.5,0.5]} style={{flex: 1}} > 
            <View style={styles.profileView}>
              {this.renderProfileImage()}
              <Text style={styles.nameText}>Morten Jensen</Text>
            </View>
            <ScrollView
              style={{flex: 1}}
            >
            <Text 
              style={styles.optionMenu}
              onPress={console.log("TEST")}>
                Mine brugeroplysninger
            </Text>
            <Text 
              style={styles.optionMenu}
              onPress={console.log("TEST")}>
                Mit Talento abbonoment
            </Text>
            <Text 
              style={styles.optionMenu}
              onPress={console.log("TEST")}>
                Betalingsoplysninger
            </Text>
            <Text 
              style={styles.optionMenu}
              onPress={console.log("TEST")}>
                Privatlivspolitik
            </Text>
            <Text 
              style={styles.optionMenu}
              onPress={console.log("TEST")}>
                Giv feedback
            </Text>
            <Text 
              style={styles.optionMenu}
              onPress={console.log("TEST")}>
                Support
            </Text>
            <Text style={styles.optionMenu} onPress={() => this.logout()}>
              Log ud
            </Text> 
          </ScrollView>
        </LinearGradient> 
      
    );
  }
}
const styles = StyleSheet.create({
  profileView:{
    marginTop: wp(15),
    marginBottom: 10
  },
  gradient: {
    flex: 1,
  },
  nameText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 27,
    textAlign: 'center',
    marginTop: 8,
    maxHeight: 36,
  },
  optionMenu: {
    fontSize: 23,
    marginTop: 30,
    color: 'white',
    textAlign: 'center'
  }
});
