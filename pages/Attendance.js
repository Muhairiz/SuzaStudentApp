import React from "react";
import {
  Text,
  View,
  StyleSheet,
} from "react-native";

const AttendancePage = () => {
    return(
        <View style={styles.container}>
            <Text>Attendance Page</Text>
        </View>
    );
}
export default AttendancePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});