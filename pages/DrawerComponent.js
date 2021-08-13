import React from "react";
import {
  View,StyleSheet,
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { 
        DrawerContentScrollView,
        DrawerItem
    } from "@react-navigation/drawer";
import {Avatar,Title,Caption,Drawer} from 'react-native-paper';


export function DrawerContent(props){
    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.contentDrawer}>
                    <View style={styles.userInfoSection}>
                        <View style={{marginTop: 15}}>
                            <Avatar.Image
                                source={require('../assets/muhairiz.jpg')}
                                size={100}
                            />
                        </View>
                        <View style={{flexDirection: 'column', marginLeft: 5}}>
                            <Title style={styles.title}>Muhairiz Maulid Makame</Title>
                            <Caption style={styles.caption}>BITA/2/18/022/TZ</Caption>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="home-outline"
                                    color ={color}
                                    size ={size}
                                />
                            )}
                            label="Home"
                            onPress = {() => {props.navigation.navigate('Home')}}
                        />

                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="account-outline"
                                    color ={color}
                                    size ={size}
                                />
                            )}
                            label="Profile"
                            onPress = {() => {props.navigation.navigate('Profile')}}
                        />

                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="contacts-outline"
                                    color ={color}
                                    size ={size}
                                />
                            )}
                            label="Result"
                            onPress = {() => {props.navigation.navigate('Result')}}
                        />

                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="book-outline"
                                    color ={color}
                                    size ={size}
                                />
                            )}
                            label="Coursework"
                            onPress = {() => {props.navigation.navigate('Coursework')}}
                        />

                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="check-outline"
                                    color ={color}
                                    size ={size}
                                />
                            )}
                            label="Attendance"
                            onPress = {() => {props.navigation.navigate('Attendance')}}
                        />

                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="message-outline"
                                    color ={color}
                                    size ={size}
                                />
                            )}
                            label="Notice"
                            onPress = {() => {props.navigation.navigate('Notice')}}
                        />

                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="book-outline"
                                    color ={color}
                                    size ={size}
                                />
                            )}
                            label="PT Application"
                            onPress = {() => {props.navigation.navigate('PracticalTraining')}}
                        />

                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="lock-outline"
                                    color ={color}
                                    size ={size}
                                />
                            )}
                            label="Change Password"
                            onPress = {() => {props.navigation.navigate('ChangePassword')}}
                        />

                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>

            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                            name="exit-to-app"
                            color ={color}
                            size ={size}
                        />
                    )}
                    label='Sign Out'
                    onPress ={() => {props.navigation.navigate('Login')}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    contentDrawer: {
        flex: 1,
        backgroundColor: 'silver'
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption:{
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        alignItems: 'center',
        flexDirection: 'row',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preferences: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});