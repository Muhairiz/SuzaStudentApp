import React from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
const ProfileStack = createStackNavigator();



const ProfilePage = () => {
    return(
        <View>
            <Text>Profile Page</Text>
        </View>
    );
}
export default ProfilePage;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});