import React from "react";
import {
  Text,
  View,
  StyleSheet,
} from "react-native";

const PracticalTrainingPage = () => {
    return(
        <View style={styles.container}>
            <Text>Practical Training Page</Text>
        </View>
    );
}
export default PracticalTrainingPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});