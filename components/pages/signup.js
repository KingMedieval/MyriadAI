import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SignUp = () => {
    return (
        <View style={style.container}>
            <Text>Sign Up Page</Text>
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

export default SignUp;