import React from "react";
import {
  View,StyleSheet,
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { 
        DrawerContentScrollView,
        DrawerItem
    } from "@react-navigation/drawer";
import {Avatar,Title,Caption,Paragraph,Drawer,Text,TouchableRipple,Switch} from 'react-native-paper';
import color from "color";
import { Component } from "react";

export function DrawerContent(props){
    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.contentDrawer}>
                    <View style={styles.userInfoSection}>
                        <View style={{marginTop: 15}}>
                            <Avatar.Image
                                source={{
                                    uri: "../assets/avatar.png"
                                }}
                                size={60}
                            />
                        </View>
                        <View style={{flexDirection: 'column', marginLeft: 5}}>
                            <Title style={styles.title}>Muhairiz Makame</Title>
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
                    onPress ={() => {}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    contentDrawer: {
        flex: 1,
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