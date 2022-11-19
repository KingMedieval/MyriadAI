import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Graph from "../elements/graph";
import Summarybox from "../elements/summarybox";

const Home = () => {
    return (
        <View>
            <Graph />
            <Summarybox />
        </View>
    )
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default Home;