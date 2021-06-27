import React from "react";
import {
  Text,
  View,
  StyleSheet,
} from "react-native";

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