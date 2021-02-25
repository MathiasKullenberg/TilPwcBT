import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
  Text,
  View,
  Image
} from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import ProgressiveImage from "../Resuable/ProgressiveImage";

export default class ProfileImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      uploading: false,
      url: "",
      auth: ""
    };
  }


  render() {
    if (this.state.uploading) {
      return (
        <View style={styles.profileImage}>
          <Image
            source={require("../../assets/testasset/562943.jpg")}
            style={styles.loaderImage}
          />
        </View>
      );
    } else {
      return (
        <TouchableOpacity onPress={this._pickImage}>
          <ProgressiveImage
            noBackground={true}
            source={require("../../assets/testasset/562943.jpg")}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      );
    }
  }
}
const styles = StyleSheet.create({
  profileImage: {
    width: wp(35),
    height: wp(35),
    borderRadius: wp(20),
    marginLeft: wp(32.5),
    marginRight: wp(32.5),
    marginTop: wp(4)
  },
  loaderImage: {
    width: wp(10),
    height: wp(10),
    marginTop: wp(15),
    marginLeft: wp(15)
  }
});
