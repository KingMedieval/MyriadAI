import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Family = () => {
    return (
        <View style={style.container}>
            <Text>Family Page</Text>
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

export default Family;