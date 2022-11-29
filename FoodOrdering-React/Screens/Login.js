import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, LogBox } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';



const Login = ({navigation}) => {
    const [mobileno, setMobileno] = useState("");
    const [uPassword, setUPassword] = useState("");

    return (
        <View style={styles.cantainer}>  
            <Text style={styles.headerTxt1}>Online Meals</Text>
            <Text style={styles.headerTxt2}>Unleash  the  foodie  in  you</Text>
            <Image source={require('../assets/logo1.png')} style={styles.img}></Image>
        <View style={styles.subView}>
            <Text style={styles.subTxt}>Login</Text>
            <TextInput style={styles.nameInput} placeholder="Enter Mobile Number" onChangeText={(e) =>setMobileno(e)} />
            <TextInput style={styles.nameInput} placeholder="Enter Password" secureTextEntry={true} onChangeText={(e) =>setUPassword(e)} />
            
            <Text style={styles.navtext} onPress={() => navigation.navigate("ForgotPass")}>Forgot Password?</Text>
            
            <TouchableOpacity style={styles.btn} onPress={() =>LogIn(mobileno, uPassword, navigation)}>
              <Text style={styles.btnTxt}>Login</Text>
            </TouchableOpacity>
            <View style={styles.endView}>
              <Text style={styles.endTxt}>New to OnlineMeals?</Text>
              <TouchableOpacity
                style={styles.endBtn}
                onPress={() => navigation.navigate("SignUp")}>
                <Text style={styles.loginTxt}>SignUp</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    
}

const LogIn = (mobileno, uPassword, navigation) =>{
    if(mobileno == '' || uPassword == ''){
      alert('Please provide all fields !!');
    }else if(mobileno.length != 10){
      alert('Enter Mobile Number correctly');
    }else{
      axios({
        method:'GET',
        url: 'http://192.168.0.105:8085/Customer/getAccount/login/'+mobileno,
      }).then(function(response){
         console.log("response", response.data.password);
         if(mobileno == response.data.mobileno && uPassword == response.data.password){
          alert("Login Successful !!");
          navigation.navigate("HomeScreen",{
            mobileno: response.data.mobileno,
            name: response.data.name,
            password: response.data.password,
            email: response.data.email,
            uniqueid: response.data.uniqueid,
          });
        }else {
          alert("Wrong Credentials !");
        }
      }).catch(function(error){
        console.log("error",error);
      })
    }
    
  }
  

export default Login

const styles = StyleSheet.create({
  cantainer: {
    backgroundColor: '#d9d9d9',
    flex:1,
    height: 700,
  },
  img:{
      height:150,
      width:165,
      alignSelf:"center",
      // marginLeft:30,
      marginTop:20,
      // flex:1,
  },

    navtext:{
      fontSize:15,
       marginHorizontal:10,
        marginVertical:2,
        // marginLeft:100,
        alignSelf:"center",
         color:'#0D4C92',
         marginTop:30,
    },
    subView: {
      backgroundColor: '#FFE9CD',
      height: 430,
      marginTop: 115,
      borderTopRightRadius: 40,
      borderTopLeftRadius: 40,
    },
    headerTxt: {
      fontSize: 40,
      marginLeft: 120,
      fontWeight: 'bold',
      color: 'red',
      position: 'absolute',
      marginTop: 40,
    },
    headerTxt1: {
      fontSize: 40,
      alignSelf:"center",
      fontWeight: 'bold',
      color: 'red',
      position: 'absolute',
      marginTop: 165,
    },
    headerTxt2: {
      fontSize: 17,
      marginLeft: 200,

     fontStyle:"italic",
      color: 'black',
      position: 'absolute',
      marginTop: 220,
      alignSelf:"center",
    },
  
    subTxt: {
      color: 'black',
      marginTop: 20,
      fontSize: 30,
      fontWeight: 'bold',
      marginLeft: 40,
    },
    nameInput: {
      height: 40,
      width: 290,
      marginLeft: 40,
      borderBottomWidth: 1,
      marginTop: 30,
      fontSize:17,
    },
    btn: {
      height: 50,
      width: 200,
      backgroundColor: 'blue',
      borderRadius: 80,
      borderWidth: 2,
      marginLeft: 100,
      marginTop: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnTxt: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
    },
    endView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    endTxt: {
      fontSize: 15,
      marginTop: 30,
      marginLeft: 80,
      fontWeight: 'bold',
    },
    endBtn: {
      marginRight: 70,
    },
    loginTxt: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 24,
      marginRight:42,
    },
  });