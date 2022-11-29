import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import React , {useRef} from 'react';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { firebaseConfig } from '../config'
import firebase from 'firebase/compat/app';


const SignUp = ({navigation,route}) => {
    const [mobileno, setMobileno] = useState("");
    const [uPassword, setUPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [uName, setUName] = useState("");
    const [uEmail, setUEmail] = useState("");
    const [code, setCode] = useState('');
    const [verificationId, setVerificationId] = useState(null);
    const recaptchaVerifier = useRef(null);

    

    const sendVerification = () => {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      phoneProvider
        .verifyPhoneNumber(mobileno, recaptchaVerifier.current)
        .then(setVerificationId);
        setMobileno('');
  };

return (
  <ScrollView style={styles.cantainer}>
     <FirebaseRecaptchaVerifierModal
      ref={recaptchaVerifier}
      firebaseConfig={firebaseConfig}/>
          <Text style={styles.headerTxt1}>Online Meals</Text>
          <Text style={styles.headerTxt2}>Unleash  the  foodie  in  you</Text>
          <Image source={require('../assets/logo1.png')} style={styles.img}></Image>
    <View style={styles.subView}>
      <Text style={styles.subTxt}>Signup</Text>

      <TextInput style={styles.nameInput} placeholder="Name" onChangeText={(e) =>setUName(e)} />
      <TextInput style={styles.nameInput} placeholder="Email Address" onChangeText={(e) =>setUEmail(e)} />
      <TextInput style={styles.nameInput} placeholder="Mobile Number" onChangeText={(e) =>setMobileno(e)} />

      <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={sendVerification}>
                <Text style={{color:'blue', fontSize:18, margin:2}}>GET OTP</Text>
                </TouchableOpacity>
      </View>

      <TextInput style={styles.nameInput} placeholder="Enter OTP" onChangeText={(e) =>setCode(e)} />
      <TextInput style={styles.nameInput} placeholder="Set Password" secureTextEntry={true} onChangeText={(e) =>setUPassword(e)} />
      <TextInput style={styles.nameInput} placeholder="Confirm Password" secureTextEntry={true} onChangeText={(e) =>setCPassword(e)} keyboardType='numeric' />


      <TouchableOpacity style={styles.btn} onPress={() =>Signup(mobileno, uName, uEmail, uPassword,cPassword,code,verificationId,setCode, navigation)}>
        <Text style={styles.btnTxt}>SignUp</Text>
      </TouchableOpacity>
      <View style={styles.endView}>
        <Text style={styles.endTxt}>Already have an account?</Text>
        <TouchableOpacity
          style={styles.endBtn}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginTxt}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  </ScrollView>
);


}

const Signup = (mobileno, uName, uEmail, uPassword,cPassword,code,verificationId,setCode, navigation) => {

  mobileno = mobileno.slice(-10);
  const uniqueid = mobileno.slice(-8);

  // const credential = firebase.auth.PhoneAuthProvider.credential(
  //   verificationId,
  //   code
  // );
  // firebase
  //   .auth()
  //   .signInWithCredential(credential)
  //   .then(() => {
  //     setCode('');
  // })
  // .catch((error) => {
  //   // show an alert in case of error
  //   alert(error);
  // })
  

  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const regpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
 
  console.log(mobileno);
  console.log(uniqueid);
  if( uName == '' || uEmail == ''  || uPassword == '' || cPassword == ''){
      alert("Please provide all field !!");
  }else if(!/^[a-zA-Z]+$/i.test(uName)){
    alert("Enter Correct Name");
  }
 else if(regpass.test(uPassword) === false){
      alert("Password must contain Min 1 uppercase letter, Min 1 lowercase letter, Min 1 special character, Min 1 number, Min 8 characters");
  }else if(reg.test(uEmail) == false){
      alert("Invalid email format !!");
  }else if(uPassword != cPassword){
      alert("Password should be Same !");
  }else{
 
      register(mobileno,uniqueid, uName, uEmail, uPassword, navigation);
  }
}

const register = (mobileno,uniqueid, uName, uEmail, uPassword, navigation) => {
  axios({
    method: 'POST',
    url: 'http://192.168.0.105:8085/Customer/createAcc', 
    data:{
      "mobileno": mobileno,
      "name": uName,
      "email": uEmail,
      "password": uPassword,
      "uniqueid":uniqueid,
  }
  }).then(function(response){
      console.log("response",JSON.stringify(response.data));
      alert(JSON.stringify(response.data));
      navigation.navigate("Login");
  }).catch(function(error){
      console.log("error",JSON.stringify(error));
      alert(JSON.stringify(error));
  })
}

export default SignUp

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
  buttonContainer: {
    // flex: 1,
    height: 50,
    width: 175,
    // backgroundColor: '#ffffcc',
    // borderRadius: 80,
    // borderWidth: 2,
    marginLeft: 200,
    marginTop: 230,
    justifyContent: 'center',
    alignItems: 'center',
    position:"absolute",
  },
});