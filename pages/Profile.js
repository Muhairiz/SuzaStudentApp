import React from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
const ProfileStack = createStackNavigator();



const ProfilePage = () => {
    return(
        <View style={styles.container}>
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