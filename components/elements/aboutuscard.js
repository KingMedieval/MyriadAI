import React from "react";
import { Card } from "react-native-paper";
import { StyleSheet, Image, Text } from "react-native";

const AboutUsCard = (props) => {

    return (
        <Card style={styles.container}>
            <Card.Title
                title={props.name}
                titleStyle={{
                    textAlign: "center",
                    fontWeight: "bold"
                }}
            />
            <Card.Content style={styles.content}>
                <Image style={{
                    resizeMode: "cover",
                    height: 200,
                    width: 100
                }}
                       source={{uri: props.picLink}}/>
                <Text style={{ flexShrink: 1, flexWrap: "wrap", width: "60%", marginHorizontal: 30 }}>
                    {props.infoText}
                </Text>
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexWrap: 'wrap',
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        textAlign: "center",
        minHeight: "10%",
        padding: "5%",
        margin: "5%"
    },
    content: {
        display: "flex",
        flexDirection: "row"
        }
});

export default AboutUsCard;