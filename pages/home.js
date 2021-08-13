import React from "react";
import {
  Text,
  View,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from '@react-navigation/stack';

//Imprt Pages
import ProfilePage from './Profile';
import ResultPage from './Result';
import CourseworkPage from './Coursework';
import AttendancePage from './Attendance';
import NoticePage from './Notice';
import PracticalTrainingPage from './PracticalTraining';
import ChangePasswordPage from './ChangePassword';
import {DrawerContent} from './DrawerComponent';

//Stacks List
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ResultStack = createStackNavigator();
const CourseworkStack = createStackNavigator();
const AttendanceStack = createStackNavigator();
const NoticeStack = createStackNavigator();
const PracticalTrainingStack = createStackNavigator();
const ChangePasswordStack = createStackNavigator();
const Drawer = createDrawerNavigator();

//Navigation Drawer
export default function Home() {
  return (
    <Drawer.Navigator drawerContent ={props => <DrawerContent {...props} /> }>
      <Drawer.Screen name="Home" component={HomeStackScreen} />
      <Drawer.Screen name="Profile" component={ProfileStackScreen} />
      <Drawer.Screen name="Result" component={ResultStackScreen} />
      <Drawer.Screen name="Coursework" component={CourseworkStackScreen} />
      <Drawer.Screen name="Attendance" component={AttendanceStackScreen} />
      <Drawer.Screen name="Notice" component={NoticeStackScreen} />
      <Drawer.Screen name="PracticalTraining" component={PracticalTrainingStackScreen} />
      <Drawer.Screen name="ChangePassword" component={ChangePasswordStackScreen} />
    </Drawer.Navigator>
  );
}
//////////HOME////////////////////////////////////////////////////////////////
const HomeStackScreen =({navigation}) =>(
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'dodgerblue',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
    <HomeStack.Screen name="Home" component={HomePage} options={{
        title: 'Home',
        headerLeft: () => (
            <Icon.Button name='ios-menu' size={35} backgroundColor='dodgerblue'
            onPress ={ () => {navigation.openDrawer();}} />
        )
    }} />
  </HomeStack.Navigator>
);

const HomePage = () => {
    return (   
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  };
//////////END-HOME////////////////////////////////////////////////////////////////

//////////PROFILE////////////////////////////////////////////////////////////////
const ProfileStackScreen =({navigation}) =>(
    <ProfileStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'dodgerblue',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
        
    <ProfileStack.Screen name="Profile" component={ProfilePage} options={{
        title: 'Profile',
        headerLeft: () => (
            <Icon.Button name='ios-menu' size={35} backgroundColor='dodgerblue'
            onPress ={ () => {navigation.openDrawer();}} />
        )
    }} />
  </ProfileStack.Navigator>
);


//////////END-PROFILE////////////////////////////////////////////////////////////////



// //////////RESULT////////////////////////////////////////////////////////////////
const ResultStackScreen =({navigation}) =>(
  <ResultStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: 'dodgerblue',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
  <ResultStack.Screen name="Result" component={ResultPage} options={{
      title: 'Result',
      headerLeft: () => (
          <Icon.Button name='ios-menu' size={35} backgroundColor='dodgerblue'
          onPress ={ () => {navigation.openDrawer();}} />
      )
  }} />
</ResultStack.Navigator>
);
// //////////END-RESULT////////////////////////////////////////////////////////////////

// //////////Coursework////////////////////////////////////////////////////////////////
const CourseworkStackScreen =({navigation}) =>(
  <CourseworkStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: 'dodgerblue',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
  <CourseworkStack.Screen name="Coursework" component={CourseworkPage} options={{
      title: 'Coursework',
      headerLeft: () => (
          <Icon.Button name='ios-menu' size={35} backgroundColor='dodgerblue'
          onPress ={ () => {navigation.openDrawer();}} />
      )
  }} />
</CourseworkStack.Navigator>
);
// //////////END-Coursework////////////////////////////////////////////////////////////////

// //////////Attendance////////////////////////////////////////////////////////////////
const AttendanceStackScreen =({navigation}) =>(
  <AttendanceStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: 'dodgerblue',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
  <AttendanceStack.Screen name="Attendance" component={AttendancePage} options={{
      title: 'Attendance',
      headerLeft: () => (
          <Icon.Button name='ios-menu' size={35} backgroundColor='dodgerblue'
          onPress ={ () => {navigation.openDrawer();}} />
      )
  }} />
</AttendanceStack.Navigator>
);
// //////////END-Attendance////////////////////////////////////////////////////////////////

// //////////Notice////////////////////////////////////////////////////////////////
const NoticeStackScreen =({navigation}) =>(
  <NoticeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: 'dodgerblue',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
  <NoticeStack.Screen name="Notice" component={NoticePage} options={{
      title: 'Notice',
      headerLeft: () => (
          <Icon.Button name='ios-menu' size={35} backgroundColor='dodgerblue'
          onPress ={ () => {navigation.openDrawer();}} />
      )
  }} />
</NoticeStack.Navigator>
);
// //////////END-Notice////////////////////////////////////////////////////////////////

// //////////PracticalTraining////////////////////////////////////////////////////////////////
const PracticalTrainingStackScreen =({navigation}) =>(
  <PracticalTrainingStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: 'dodgerblue',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
  <PracticalTrainingStack.Screen name="PracticalTraining" component={PracticalTrainingPage} options={{
      title: 'Practical Training',
      headerLeft: () => (
          <Icon.Button name='ios-menu' size={35} backgroundColor='dodgerblue'
          onPress ={ () => {navigation.openDrawer();}} />
      )
  }} />
</PracticalTrainingStack.Navigator>
);
// //////////END-PracticalTraining////////////////////////////////////////////////////////////////

// //////////ChangePassword////////////////////////////////////////////////////////////////
const ChangePasswordStackScreen =({navigation}) =>(
  <ChangePasswordStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: 'dodgerblue',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
  <ChangePasswordStack.Screen name="ChangePassword" component={ChangePasswordPage} options={{
      title: 'Change Password',
      headerLeft: () => (
          <Icon.Button name='ios-menu' size={35} backgroundColor='dodgerblue'
          onPress ={ () => {navigation.openDrawer();}} />
      )
  }} />
</ChangePasswordStack.Navigator>
);
// //////////END-ChangePassword////////////////////////////////////////////////////////////////


