import React from "react";
import {
  Text,
  View,
  StyleSheet,
} from "react-native";

const ChangePasswordPage = () => {
    return(
        <View style={styles.container}>
            <Text>Change Password Page</Text>
        </View>
    );
}
export default ChangePasswordPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});