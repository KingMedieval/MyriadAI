import * as React from 'react';
import {View} from "react-native";
import { Drawer } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

const Hamburger = (props) => {

    return (
        <>
            <StatusBar style={"auto"} />
            <View style={{flex: 1, marginTop:'15%'}}>
                <Drawer.Section title="Myriad AI">
                    <Drawer.Item
                        label="Home"
                        active={props.active === 'home'}
                        onPress={props.handlePressHome}
                    />
                    <Drawer.Item
                        label="Family"
                        active={props.active === 'family'}
                        onPress={props.handlePressFamily}
                    />
                    <Drawer.Item
                        label="Sign Up"
                        active={props.active === 'signup'}
                        onPress={props.handlePressSignUp}
                    />
                    <Drawer.Item
                        label="Advanced"
                        active={props.active === 'advanced'}
                        onPress={props.handlePressAdv}
                    />
                    <Drawer.Item
                        label="About Us"
                        active={props.active === 'about'}
                        onPress={props.handlePressAbout}
                    />
                </Drawer.Section>
            </View></>

    );
};

export default Hamburger;