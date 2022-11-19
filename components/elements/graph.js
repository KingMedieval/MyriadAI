import React from "react";
import { View, StyleSheet } from "react-native";
import * as Svg from 'react-native-svg';
import { Card } from "react-native-paper";
import { VictoryPie } from "victory-native";


const Graph = () => {
    return (
            <View>
                <Card style={styles.container}>
                    <Card.Title
                        title="Graph Placeholder"
                        titleStyle={{
                            textAlign: "center",
                            fontWeight: "bold"
                        }}
                    />
                    <Card.Content>
                            <VictoryPie
                                events={[{
                                    target: "data",
                                    eventHandlers: {
                                        onPressIn: () => {
                                            return [
                                                {
                                                    target: "data",
                                                    mutation: ({ style }) => {
                                                        return style.fill === "#c43a31" ? null : { style: { fill: "#c43a31" } };
                                                    }
                                                }, {
                                                    target: "labels",
                                                    mutation: ({ text }) => {
                                                        return text === "clicked" ? null : { text: "clicked" };
                                                    }
                                                }
                                            ];
                                        }
                                    }
                                }]}
                                data={[
                                    { x: "Cats", y: 35 },
                                    { x: "Dogs", y: 40 },
                                    { x: "Birds", y: 55 }
                                ]}
                                padding={{left: 50, right: 50}}
                                labelRadius={75}
                                style={{labels: { fontSize: 20, fill: "#ffffff" }}}
                            />
                    </Card.Content>
                   </Card>
            </View>

    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        textAlign: "center",
        padding: "5%",
        margin: "5%"
    }
});

export default Graph;