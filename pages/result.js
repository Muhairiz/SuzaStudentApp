import React from "react";
import {
  Text,
  View,
  StyleSheet,
} from "react-native";

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