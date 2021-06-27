import React from "react";
import {
  Text,
  View,
  StyleSheet,
} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
const CourseworkStack = createStackNavigator();



const CourseworkPage = () => {
    return(
        <View style={styles.container}>
            <Text>Coursework Page</Text>
        </View>
    );
}
export default CourseworkPage;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});