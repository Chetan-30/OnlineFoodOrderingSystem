import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';

const ForgotPass = ({navigation}) => {
    const [mobileno, setMobileno] = useState("");
    const [uEmail, setUEmail] = useState("");
    const [ uPassword, setUPassword] = useState("");
    const [ uPassword1, setUPassword1] = useState("");


 
  return (
    <View style={styles.cantainer}>
        <Text style={styles.headerTxt1}>Online Meals</Text>
            <Text style={styles.headerTxt2}>Unleash  the  foodie  in  you</Text>
            <Image source={require('../assets/logo1.png')} style={styles.img}></Image>
      <View style={styles.subView}>
        <Text style={styles.subTxt}>Update Password</Text>
        <TextInput style={styles.nameInput} placeholder="Enter Mobile Number" onChangeText={(e) =>setMobileno(e)} />
        <TextInput style={styles.nameInput} placeholder="Enter Email address" onChangeText={(e) =>setUEmail(e)} />
        <TextInput style={styles.nameInput} placeholder="Enter New Password" secureTextEntry={true} onChangeText={(e) =>setUPassword(e)} />
        <TextInput style={styles.nameInput} placeholder="Confirm Password" secureTextEntry={true} onChangeText={(e) =>setUPassword1(e)} />
        
        <Text style={styles.navtext} onPress={() => navigation.navigate("Login")}>Back to Login</Text>
        
        <TouchableOpacity style={styles.btn} onPress={() =>updatePass(mobileno, uPassword, uEmail,uPassword1)}>
          <Text style={styles.btnTxt}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );


}


const updatePass = (mobileno, uPassword, uEmail,uPassword1) => {
    const regpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    if(mobileno == "" || uPassword == "" || uEmail == ""){
        alert("Please provide all fields !!");
    }else if(uPassword != uPassword1){
      alert("Please recheck your Password");
    }else if(regpass.test(uPassword) === false){
      alert("Password must contain Min 1 uppercase letter, Min 1 lowercase letter, Min 1 special character, Min 1 number, Min 8 characters");
  }
    else{
        axios({
            method:'POST',
            url: 'http://192.168.0.105:8085/Customer/updatePassword/' + mobileno + '/' + uEmail + '/' + uPassword,
        }).then(function(response){
            console.log("response", JSON.stringify(response.data));
            alert( JSON.stringify(response.data));
        })
    }
}



export default ForgotPass

const styles = StyleSheet.create({
  cantainer: {
    backgroundColor: '#d9d9d9',
    flex:1,
    height: 700,
  },
  img:{
      height:50,
      width:50,
      position:"absolute",
      marginLeft:70,
      marginTop:50,
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
    height: 630,
    marginTop: 150,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  headerTxt1: {
    fontSize: 40,
    marginLeft:125,
    fontWeight: 'bold',
    color: 'red',
    position: 'absolute',
    marginTop: 50,
  },
  headerTxt2: {
    fontSize: 17,
    marginLeft: 200,
   fontStyle:"italic",
    color: 'black',
    position: 'absolute',
    marginTop: 105,
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
    fontSize:17,
    height: 40,
    width: 290,
    marginLeft: 40,
    borderBottomWidth: 1,
    marginTop: 30,
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
    marginTop: 15,
    marginLeft: 80,
    fontWeight: 'bold',
  },
  endBtn: {
    marginRight: 70,
  },
  loginTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginRight:30,
  },
});