import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, View, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons'; // Assurez-vous que 'Ionicons' est correctement importé.
import { Platform } from 'react-native';
import Home from '../Screens/Home';
import Contact from '../Screens/Contact';

function CustomDrawerContent(props) {
    return (
        <ScrollView style={styles.container}>
            <View>
                <View>
                    <Text>Menu</Text>
                </View>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem
                    icon={() => <Icon name={Platform.OS === 'ios' ? "ios-close" : "md-close"} />}
                    label="Close"
                    onPress={() => props.navigation.closeDrawer()}
                />
            </DrawerContentScrollView>
        </ScrollView>
    );
}

function MyDrawer() {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            backBehavior="history"
            drawerContent={props => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Contact" component={Contact} />
        </Drawer.Navigator>
    );
}

export default function DrawerNavigation() {
    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    );
}

const styles = {
    container: {
        flex: 1,
    },
};
