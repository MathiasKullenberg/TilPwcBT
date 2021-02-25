import React, { Component, PureComponent } from "react";
import {LinearGradient} from 'expo-linear-gradient'
import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
import moment from 'moment'
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Linking,
  AsyncStorage,
  RefreshControl
} from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";


//DEPENDENCY INFO https://github.com/wix/react-native-calendars

export default class MyWeekScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }



  renderCalender() {
      moment.locale('en-ca')
      LocaleConfig.locales['dk'] = {
        monthNames: ['Januar','Februar','Marts','April','Maj','Juni','Juli','August','September','Oktober','November','December'],
        monthNamesShort: ['Jan.','Feb.','Mar.','Apr.','Maj.','Jun.','Jul.','Aug.','Sep.','Oct.','Nov.','Dec.'],
        dayNames: ['Søndag','Mandag','Tirsdag','Onsdag','Torsdag','Fredag','Lørdag'],
        dayNamesShort: ['Søn','Man','Tir','Ons','Tor','Fre','Lør'],
        today: 'Idag'
      };
      LocaleConfig.defaultLocale = 'dk';
      return(
        <Calendar
        // Handler which gets executed on day press. Default = undefined
        markedDates={{
            '2021-02-16': {selected: true, marked: true, selectedColor: 'blue'},
            '2021-02-17': {marked: true},
            '2021-02-18': {marked: true, dotColor: 'red', activeOpacity: 0},
            '2021-02-19': {disabled: true, disableTouchEvent: true}
          }}
        onDayPress={(day) => {console.log('selected day', day)}}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={(day) => {console.log('selected day', day)}}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'MMMM yyyy'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => {console.log('month changed', month)}}
        // Hide month navigation arrows. Default = false
        // Do not show days of other months in month page. Default = false
        hideExtraDays={true}
        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        firstDay={1}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={subtractMonth => subtractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
        onPressArrowRight={addMonth => addMonth()}
        enableSwipeMonths={true}
        theme={{
            backgroundColor: 'transparent',
            calendarBackground: 'transparent',
            textSectionTitleColor: '#b6c1cd',
            textSectionTitleDisabledColor: '#d9e1e8',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#00adf5',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: 'orange',
            monthTextColor: 'white',
        }}
        style={styles.calenderContainer}
      />
      )
  }

  render() {
    return (
      <LinearGradient colors={['#0F2027', '#203A43']} start={[0.5,0.5]} style={{flex: 1}} > 
          
              {this.renderCalender()}
          
        </LinearGradient> 
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: wp(3)
  },
  nameText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'grey',
  },
  gradient: {
    flex: 1,
  },
  calenderContainer: {
      marginTop: wp(20)
  }
});
