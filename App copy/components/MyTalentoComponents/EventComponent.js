import React, { Component, PureComponent } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Modal,
} from "react-native";

import { Video } from "expo-av";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";

export default class EventCompent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      status: {},
      video: null,
    };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  //Get the function name
  getEventType(item) {
    if (item.type == 0) {
      return <Text style={styles.type}>Fysisk</Text>;
    } else if (item.type == 1) {
      return <Text style={styles.type}>Mentalt</Text>;
    } else if (item.type == 2) {
      return <Text style={styles.type}>Fodbold</Text>;
    } else if (item.type == 3) {
      return <Text style={styles.type}>Alle</Text>;
    }
  }

  // Function to render modal on popup, works with setmodalvisible function
  renderEvent(item) {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          this.setModalVisible(false);
        }}
      >
        <LinearGradient
          colors={["#232526", "#414345"]}
          start={[1.0, 1.0]}
          style={{ flex: 1 }}
        >
          <View style={styles.eventPopup}>
            <View>
              <Video
                source={{ uri: item.VideoPath }}
                shouldPlay
                resizeMode="cover"
                style={{ width: wp(100), height: 300, marginTop: 0 }}
              />
              <Text style={styles.eventHeader}>{item.title}</Text>
              <Text style={styles.eventDescription}>Beskrivelse</Text>
              <Text style={styles.description}>{item.Description}</Text>
            </View>
          </View>
          <View style={styles.bottomButton}>
            <TouchableOpacity
              onPress={() => this.setModalVisible(false)}
              style={styles.exitButton}
            >
              <Text>Luk event</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </Modal>
    );
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <LinearGradient
            colors={["#434343", "#232526"]}
            start={[0.5, 0.5]}
            style={styles.item}
          >
            {this.getEventType(this.props.event)}
            <Text style={styles.title}>{this.props.event.title}</Text>
          </LinearGradient>
        </TouchableOpacity>
        {this.renderEvent(this.props.event)}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    flex: 1,
    borderRadius: 10,
    padding: 15,
    marginRight: 10,
    marginTop: 17,
    marginLeft: 10,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 5,
    marginBottom: 10,
  },
  type: {
    color: "white",
    marginLeft: 5,
    marginTop: 10,
  },
  eventPopup: {
    flex: 1,
    flexDirection: "column",
    textAlign: "center",
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  eventHeader: {
    color: "white",
    fontSize: 27,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  description: {
    color: "white",
  },
  exitButton: {
    height: hp(5),
    width: wp(30),
    borderRadius: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
  },
  bottomButton: {
    alignItems: "center",
  },
  eventDescription: {
    color: "white",
  },
});

