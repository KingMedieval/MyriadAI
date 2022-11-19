import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AdvMode = () => {
    return (
        <View style={style.container}>
            <Text>Advanced Page</Text>
        </View>
    )
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AdvMode;