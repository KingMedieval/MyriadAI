import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import {Card} from "react-native-paper";

const App = () => {
    return (
        <View>
            <Card style={styles.screen}>
                <TextInput style={styles.input} placeholder="Summary" />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: "5%",
        height: 100
    },

});

export default App;