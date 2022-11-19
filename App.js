import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getHeaderTitle } from '@react-navigation/elements';
import {createDrawerNavigator, DrawerContent} from '@react-navigation/drawer';
import { useState } from "react";
import Hamburger from "./components/elements/hamburgermenu";
import Home from "./components/pages/home";
import AboutUs from "./components/pages/aboutus";
import Family from "./components/pages/family";
import SignUp from "./components/pages/signup";
import AdvMode from "./components/pages/advancedMode";
import {
    Card,
    Title,
    Paragraph,
    List,
    Appbar,
    Provider as PaperProvider,
} from 'react-native-paper';
import Signup from "./components/pages/signup";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DetailsScreen() {
    return (
        <View style={style.container}>
            <Text>Details Screen</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

function CustomNavigationBar({ navigation, route, options }) {
    const title = getHeaderTitle(options, route.name);
    return (
        <Appbar.Header>
            <Appbar.Action icon="menu" onPress={() => {navigation.openDrawer()}} />
            <Appbar.Content title={title}/>
        </Appbar.Header>
    );
}

export default function App() {
    const DrawerContent = Hamburger;
    const [active, setActive] = useState('home');
    const handlePress = (menuOptions) => {
        setActive(menuOptions);
    }
    return (
        <>
            <PaperProvider>
                <StatusBar style={"auto"} />
                <NavigationContainer>
                    <Drawer.Navigator initialRouteName="Home"
                                      useLegacyImplementation={true}
                                      drawerContent={({navigation}) => <DrawerContent
                                          active={active}
                                          handlePressHome={() => {
                                              navigation.navigate('Home');
                                              handlePress('home');
                                          }}
                                          handlePressAbout={() => {
                                              navigation.navigate('About Us');
                                              handlePress('about');
                                          }}
                                          handlePressFamily={() => {
                                              navigation.navigate('Family');
                                              handlePress('family');
                                          }}
                                          handlePressSignUp={() => {
                                              navigation.navigate('Sign Up');
                                              handlePress('signup');
                                          }}
                                          handlePressAdv={() => {
                                              navigation.navigate('Advanced');
                                              handlePress('advanced');
                                          }}
                                      />}
                                      screenOptions={{
                                          header: (props) => <CustomNavigationBar {...props} />,
                                      }}>

                        <Drawer.Screen name="Home" component={Home} />
                        <Drawer.Screen name="Advanced" component={AdvMode} />
                        <Drawer.Screen name="Family" component={Family} />
                        <Drawer.Screen name="Sign Up" component={SignUp} />
                        <Drawer.Screen name="About Us" component={AboutUs} />
                        <Drawer.Screen name="Details" component={DetailsScreen} />

                    </Drawer.Navigator>
                </NavigationContainer>
            </PaperProvider>
        </>
    );
}