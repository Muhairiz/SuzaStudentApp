import React from "react";
import {
  Text,
  View,
  StyleSheet,
} from "react-native";

const NoticePage = () => {
    return(
        <View style={styles.container}>
            <Text>Notice Page</Text>
        </View>
    );
}
export default NoticePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});