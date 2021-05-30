import React from "react";
import {
  Text,
  View,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const NoteStack = createStackNavigator();
const AttendanceStack = createStackNavigator();
const CourseStack = createStackNavigator();
const CourseworkStack = createStackNavigator();
const ResultStack = createStackNavigator();
const PasswordStack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function Home() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStackScreen} />
      <Drawer.Screen name="Profile" component={ProfileStackScreen} />
      <Drawer.Screen name="Notes" component={NoteStackScreen} />
      <Drawer.Screen name="Attendance" component={AttendanceStackScreen} />
      <Drawer.Screen name="Courses" component={CourseStackScreen} />
      <Drawer.Screen name="Coursework" component={CourseworkStackScreen} />
      <Drawer.Screen name="Results" component={ResultStackScreen} />
      <Drawer.Screen name="Change Password" component={PasswordStackScreen} />
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

const ProfilePage = () => {
    return (   
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Profile Screen</Text>
      </View>
    );
  };
//////////END-PROFILE////////////////////////////////////////////////////////////////

//////////NOTES////////////////////////////////////////////////////////////////
const NoteStackScreen =({navigation}) =>(
    <NoteStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'dodgerblue',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
    <NoteStack.Screen name="Notes" component={NotePage} options={{
        title: 'Notes',
        headerLeft: () => (
            <Icon.Button name='ios-menu' size={35} backgroundColor='dodgerblue'
            onPress ={ () => {navigation.openDrawer();}} />
        )
    }} />
  </NoteStack.Navigator>
);

const NotePage = () => {
    return (   
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Note Screen</Text>
      </View>
    );
  };
//////////END-NOTES////////////////////////////////////////////////////////////////

//////////ATTENDANCE////////////////////////////////////////////////////////////////
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

const AttendancePage = () => {
    return (   
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Attendance Screen</Text>
      </View>
    );
  };
//////////END-ATTENDANCE////////////////////////////////////////////////////////////////

//////////COURSES////////////////////////////////////////////////////////////////
const CourseStackScreen =({navigation}) =>(
    <CourseStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'dodgerblue',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
    <CourseStack.Screen name="Courses" component={CoursePage} options={{
        title: 'Courses',
        headerLeft: () => (
            <Icon.Button name='ios-menu' size={35} backgroundColor='dodgerblue'
            onPress ={ () => {navigation.openDrawer();}} />
        )
    }} />
  </CourseStack.Navigator>
);

const CoursePage = () => {
    return (   
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Courses Screen</Text>
      </View>
    );
  };
//////////END-COURSES////////////////////////////////////////////////////////////////

//////////COURSEWORK////////////////////////////////////////////////////////////////
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

const CourseworkPage = () => {
    return (   
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Coursework Screen</Text>
      </View>
    );
  };
//////////END-COURSEWORK////////////////////////////////////////////////////////////////

//////////RESULT////////////////////////////////////////////////////////////////
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
    <ResultStack.Screen name="Result" component={ResultPage}  options={{
        title: 'Result',
        headerLeft: () => (
            <Icon.Button name='ios-menu' size={35} backgroundColor='dodgerblue' 
            onPress ={ () => {navigation.openDrawer();}} />
        )
    }} />
  </ResultStack.Navigator>
);

const ResultPage = () => {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Result </Text>
      </View>
    );
  };
//////////END-RESULT////////////////////////////////////////////////////////////////

//////////PASSWORD////////////////////////////////////////////////////////////////
const PasswordStackScreen =({navigation}) =>(
    <PasswordStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'dodgerblue',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
    <PasswordStack.Screen name="Password" component={PasswordPage} options={{
        title: 'Change Password',
        headerLeft: () => (
            <Icon.Button name='ios-menu' size={35} backgroundColor='dodgerblue'
            onPress ={ () => {navigation.openDrawer();}} />
        )
    }} />
  </PasswordStack.Navigator>
);

const PasswordPage = () => {
    return (   
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Password Screen</Text>
      </View>
    );
  };
//////////END-PASSWORD////////////////////////////////////////////////////////////////
