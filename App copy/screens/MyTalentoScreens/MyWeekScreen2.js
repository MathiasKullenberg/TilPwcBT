import React, { Component } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { LinearGradient } from "expo-linear-gradient";
import moment from "moment";
import "moment/locale/en-ca";

import EventCompent from "../../components/MyTalentoComponents/EventComponent";

let data = [
  {
    Id: 1,
    Type: 2,
    CreateDate: "2021-01-30T00:00:00",
    Title: "Inderside afleverings Træning",
    Description: "Øv din præcision af inderside spark.",
    VideoPath: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    ImagePath: "N9oMKiE/maxresdefault.jpg",
    Category: "Afleveringer",
    Duration: "01:00:00",
    Date: "2021-02-19",
  },
  {
    Id: 2,
    Type: 2,
    CreateDate: "2021-01-30T00:00:00",
    Title: "Vristsparks træning",
    Description: "Øv dit vristspark ved at sparke på mål.",
    VideoPath: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    ImagePath: "IMAGE_PATH",
    Category: "Spark",
    Duration: "01:30:00",
    Date: "2021-02-20",
  },
  {
    Id: 3,
    Type: 1,
    CreateDate: "2021-01-30T00:00:00",
    Title: "Prestur",
    Description:
      "Løb 1 km i højt tempo og derefter løb i maks tempo så længe du kan, jo mere presset du bliver jo bedre",
    VideoPath: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    ImagePath: "IMAGE_PATH",
    Category: "Mentalt pres",
    Duration: "01:00:00",
    Date: "2021-02-21",
  },
  {
    Id: 4,
    Type: 0,
    CreateDate: "2021-01-30T00:00:00",
    Title: "Opbyging af masse",
    Description: "Bryst træning",
    VideoPath: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    ImagePath: "IMAGE_PATH",
    Category: "Træning",
    Duration: "01:00:00",
    Date: "2021-02-22",
  },
  {
    Id: 5,
    Type: 0,
    CreateDate: "2021-01-30T00:00:00",
    Title: "Ekplosiv træning",
    Description: "Gør en masse eksplosive ben øvelser",
    VideoPath: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    ImagePath: "IMAGE_PATH",
    Category: "Hurtighed",
    Duration: "01:00:00",
    Date: "2021-02-23",
  },
  {
    Id: 5,
    Type: 0,
    CreateDate: "2021-01-30T00:00:00",
    Title: "Ekplosiv træning",
    Description: "Gør en masse eksplosive ben øvelser",
    VideoPath: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    ImagePath: "IMAGE_PATH",
    Category: "Hurtighed",
    Duration: "01:00:00",
    Date: "2021-02-24",
  },
  {
    Id: 5,
    Type: 0,
    CreateDate: "2021-01-30T00:00:00",
    Title: "Ekplosiv træning",
    Description: "Gør en masse eksplosive ben øvelser",
    VideoPath: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    ImagePath: "IMAGE_PATH",
    Category: "Hurtighed",
    Duration: "01:00:00",
    Date: "2021-02-25",
  },
  {
    Id: 5,
    Type: 0,
    CreateDate: "2021-01-30T00:00:00",
    Title: "Ekplosiv træning",
    Description: "Gør en masse eksplosive ben øvelser",
    VideoPath: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    ImagePath: "IMAGE_PATH",
    Category: "Hurtighed",
    Duration: "01:00:00",
    Date: "2021-02-26",
  },
  {
    Id: 5,
    Type: 0,
    CreateDate: "2021-01-30T00:00:00",
    Title: "Ekplosiv træning",
    Description: "Gør en masse eksplosive ben øvelser",
    VideoPath: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    ImagePath: "IMAGE_PATH",
    Category: "Hurtighed",
    Duration: "01:00:00",
    Date: "2021-02-27",
  },
  {
    Id: 5,
    Type: 0,
    CreateDate: "2021-01-30T00:00:00",
    Title: "Ekplosiv træning",
    Description: "Gør en masse eksplosive ben øvelser",
    VideoPath: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    ImagePath: "IMAGE_PATH",
    Category: "Hurtighed",
    Duration: "01:00:00",
    Date: "2021-02-28",
  },
  {
    Id: 5,
    Type: 0,
    CreateDate: "2021-01-30T00:00:00",
    Title: "Ekplosiv træning",
    Description: "Gør en masse eksplosive ben øvelser",
    VideoPath: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    ImagePath: "IMAGE_PATH",
    Category: "Hurtighed",
    Duration: "01:00:00",
    Date: "2021-03-01",
  },
];

//Adding moment format for dates to calender
moment().format();
moment.locale("en-ca");

export default class AgendaScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: {},
    };
  }

  componentDidMount() {
    moment.locale("en-ca");
    this.setState({ chosenDate: moment().format("L") });
    this.getEventData();
  }

  getEventData() {
    this.setState({ items: data });
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = 0; i < data.length; i++) {
        const event = this.state.items;
        const strTime = this.timeToString(event[i].Date);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          this.state.items[strTime].push({
            title: event[i].Title,
            Description: event[i].Description,
            height: 100,
            type: event[i].Type,
            VideoPath: event[i].VideoPath,
          });
        } else {
          console.log("Yids");
        }
      }
      const newItems = {};
      Object.keys(this.state.items).forEach((key) => {
        newItems[key] = this.state.items[key];
      });
      this.setState({
        items: newItems,
      });
    }, 1000);
  }

  renderItem(item) {
    return <EventCompent event={item} />;
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split("T")[0];
  }

  render() {
    const startOfWeek = moment().startOf("isoWeek");
    const endOfWeek = moment().endOf("isoWeek");
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        current={moment().format("L")}
        selected={moment().format("L")}
        renderItem={this.renderItem.bind(this)}
        futureScrollRange={12}
        //onDayPress={(day) => {this.renderSingleDate(day.dateString)}}
        rowHasChanged={this.rowHasChanged.bind(this)}
        minDate={startOfWeek.format("L")}
        maxDate={endOfWeek.format("L")}
        disableAllTouchEventsForDisabledDays={true}
        firstDay={1}
        theme={{
          calendarBackground: "#232526",
          agendaKnobColor: "#414345",
          dotColor: "#ffffff",
          dayTextColor: "#ffffff",
          agendaDayNumColor: "#000000",
          agendaTodayColor: "#000000",
          textDisabledColor: "black",
        }}
        //renderDay={(day, item) => (<View style={styles.dayTitle}><Text>Hej</Text></View>)}
        // hideExtraDays={false}
        style={styles.agendaStyle}
      />
    );
  }
}

const styles = StyleSheet.create({
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
  dayTitle: {
    textAlign: "center",
  },
  //
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

