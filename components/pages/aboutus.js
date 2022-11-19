import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AboutUsCard from "../elements/aboutuscard";

const AboutUs = () => {
    return (
        <View >
            <AboutUsCard
                name={"Jiyoo"}
                picLink={"https://cdn.discordapp.com/attachments/723459526606585857/1043555893154959410/artworks-wvAqsXMv78fALLg9-6Dy4Wg-t500x500.jpg"}
                infoText={"Hello! I am Jiyoo. I worked on the front end of the app!"}
            />
        </View>
    )
};

export default AboutUs;