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

export default class MyDataButton extends PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <TouchableOpacity onPress={() => this.props.navigate.navigate(this.props.page)}>  
                <LinearGradient colors={['#434343', '#434343']} start={[0.1,0.5]} style={styles.itemContainer}> 
                    <Text style={styles.titleStyle}>{this.props.title}</Text>
                </LinearGradient>
            </TouchableOpacity>
        );
      }
}
const styles = StyleSheet.create({
    itemContainer:{
        height: hp(8), 
        width: wp(90),
        marginLeft: wp(5),
        marginRight: wp(5),
        marginTop: 7.5,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        justifyContent: 'center'
    },
    titleStyle:{
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 15,
        color: 'white',
        textAlign: 'center'
    },
});