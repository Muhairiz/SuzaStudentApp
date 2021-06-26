import React from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
const ResultStack = createStackNavigator();



const ResultPage = () => {
    return(
        <View style={styles.container}>
            <Text>Result Page</Text>
        </View>
    );
}
export default ResultPage;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});