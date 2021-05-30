import  React from 'react';
import { TouchableOpacity } from 'react-native';
import {Icon} from 'react-native-elements';
import { StyleSheet, Text, View, StatusBar, TextInput, Button } from 'react-native';

const LoginScreen =({navigation}) =>{
    return (
      <View  style={styles.container}>
        <StatusBar  />
        <Text style={styles.heading}>Login</Text>
  
        <Text style={styles.textStyle1}>Username</Text>
        <View style={styles.inputView}>
        <Icon
          color= 'black'
          name= 'user'
          type= 'font-awesome'
          size={20}
        />
        <TextInput style={{
          flex: 1,
          paddingHorizontal: 12,
        }}
        placeholder={"Enter username"}/>
        </View>
  
        <Text style={styles.textStyle}>Password</Text>
        <View style={styles.inputView}>
        <Icon
          color= 'black'
          name= 'lock'
          type= 'font-awesome'
          size={20}
        />
        <TextInput style={{
          flex: 1,
          paddingHorizontal: 12,
        }}
        textContentType= 'password'
        placeholder={"Enter password"}/>
        <TouchableOpacity
          style={{padding: 4}}
        >
          <Icon name='eye' type='font-awesome-5' size={20} />
        </TouchableOpacity>
        </View>
  
        <TouchableOpacity
          style={styles.roundedBtn}
          onPress ={() => navigation.navigate('Home')}>
            <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>
      
    );
  };
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      backgroundColor: 'dodgerblue'
    },
    textStyle: {
      color: 'white',
      fontSize: 18,
      marginLeft: 30,
      marginTop: 30,
      marginRight: 50,
      fontWeight: '400',
    },
    textStyle1: {
      color: 'white',
      fontSize: 18,
      marginLeft: 30,
      marginTop: 20,
      marginRight: 50,
      fontWeight: '400',
    },
    inputView: {
      width:'80%',
      height: 44,
      marginLeft: 30,
      marginTop: 10,
      backgroundColor: '#f1f3f6',
      display: 'flex',
      alignItems: 'center',
      borderRadius: 8,
      flexDirection: 'row',
      paddingHorizontal: 10,
    },
    heading: {
      color: 'white',
      fontSize: 35,
      marginLeft: 30,
      marginTop: 150,
      marginRight: 50,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    roundedBtn:{
      display: 'flex',
      alignItems: 'center',
      paddingVertical: 14,
      paddingHorizontal: 40,
      backgroundColor: 'white',
      borderRadius: 1000,
      elevation: 2,
      width: '50%',
      shadowColor: '#000',
      shadowOffset: { width: 2, height: 2},
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      marginLeft: 80,
      marginTop: 30,
    },
    btnText: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 17
    }
  });

  export default LoginScreen;