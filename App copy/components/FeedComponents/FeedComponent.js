import React, { Component, PureComponent } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,

  
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { LinearGradient } from 'expo-linear-gradient';

export default class FeedComponent extends PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
    
        return (
            <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => this.props.navigate.navigate(this.props.page)}
            >
                <Image 
                    style={styles.image}
                    source={this.props.image}
                ></Image>
            
                <View style={styles.textView}>
                    <Text style={styles.headerStyle}>{this.props.header}</Text>
                </View>
            </TouchableOpacity>
        );
      }
}
const styles = StyleSheet.create({
    itemContainer:{
      height: hp(30), 
      width: wp(90),
      marginLeft: wp(5),
      marginRight: wp(5),
      borderRadius: 15,
      backgroundColor: '#DFDFDF',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 10,
      marginTop: 20
    },
    headerStyle:{
      fontSize: 17,
      fontWeight: 'bold',
      marginLeft: 15,
    },
    textView:{
      height: hp(20),
      marginTop: 5,
    },
    image:{
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        height: '80%',
        width: '100%',
        alignSelf:"center"
    },
    

    
});