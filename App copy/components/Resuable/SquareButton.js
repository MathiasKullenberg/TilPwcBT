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

export default class RestaurantComponent extends PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
    
        return (
            <TouchableOpacity

                onPress={() => this.props.navigate.navigate(this.props.page)}>
                <LinearGradient colors={['#434343', '#434343']} start={[0.5,0.5]} style={styles.itemContainer}> 
                  <Image 
                    style={styles.image}
                    source={this.props.image}
                  />
                  <Text style={styles.title}>{this.props.title}</Text>
                </LinearGradient>
            </TouchableOpacity>
        );
      }
}
const styles = StyleSheet.create({
    itemContainer:{
      height: wp(40), 
      width: wp(40),
      marginTop: 13,
      marginLeft: 25,
      borderRadius: 15,
      backgroundColor: '#48494b',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 10,
    },
    title:{
      fontSize: 15,
      flex: 1,
      textAlign:"center",
      color: 'white',
      marginTop: 9
    },
    textView:{
      height: hp(20),
      marginTop: 10
    },
    image:{
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        height: '60%',
        width: '60%',
        marginTop: 20,
        alignSelf:"center"
        
    },
    

    
  });
  
  
  



