import { useState } from 'react';
import { StyleSheet, Text, View,Button, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { firebaseConfig } from '../config'
import firebase from 'firebase/compat/app';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { useNavigation } from "@react-navigation/native";

const Billing = ({navigation, route}) => {
    const mobileno = route.params.mobileno ;
    const uniqueid = route.params.uniqueid ;
    const name = route.params.name ;
    const [flat, setFlat] = useState("");
    const [soc, setSoc] = useState("");
    const [street, setStreet] = useState("");
    const [zip, setZip] = useState("");
    const [value1, setValue1] = useState(0);
    const [cardno, setCardno] = useState("");
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [cvv, setCvv] = useState("");

    var radio_props = [
        { label: 'Pay by Cash', value: 0 },
        { label: 'Pay by Card', value: 1 }
    ];

    return (
        <ScrollView style={styles.cantainer}>

            <Text style={styles.headerTxt1}>Online Meals</Text>
            <Text style={styles.headerTxt2}>Unleash  the  foodie  in  you</Text>
            <Image source={require('../assets/logo1.png')} style={styles.img}></Image>
            <View style={styles.subView}>
                <Text style={styles.subTxt}>Billing Address</Text>

                <TextInput style={styles.nameInput} placeholder="Flat No / Floor" onChangeText={(e) => setFlat(e)} />
                <TextInput style={styles.nameInput} placeholder="Society" onChangeText={(e) => setSoc(e)} />
                <TextInput style={styles.nameInput} placeholder="Street Name" onChangeText={(e) => setStreet(e)} />
                <TextInput style={styles.nameInput} placeholder="Zip Code" onChangeText={(e) => setZip(e)} />

                <Text style={styles.subTxt}>Payment Info</Text>

                <RadioForm style={{ marginLeft: 40, marginRight: 40 }}
                    radio_props={radio_props}
                    buttonSize={15}
                    initial={0}
                    formHorizontal={true}
                    labelHorizontal={true}
                    buttonColor={'#2196f3'}
                    animation={true}
                    onPress={(value1) => { setValue1(value1) }}

                />

                {
                    value1 === 0 ? (
                        <Text></Text>
                    ) : (
                        <View>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                
                            <TextInput style={styles.nameInput2} placeholder="Card Number" onChangeText={(e) => setCardno(e)} />
                                <TextInput style={styles.nameInput1} placeholder="CVV" secureTextEntry onChangeText={(e) => setCvv(e)} />
                     
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                
                            <TextInput style={styles.nameInput2} placeholder="Month" onChangeText={(e) => setMonth(e)} />
                                <TextInput style={styles.nameInput1} placeholder="Year" onChangeText={(e) => setYear(e)} />
                     
                            </View>
                        </View>
                    )
                }

                <TouchableOpacity style={styles.btn} onPress={() => Ordernow(flat,soc,street,zip,value1,cardno,month,year,cvv,mobileno,uniqueid,name,navigation)}>
                    <Text style={styles.btnTxt}>Order Now</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    );


}

const Ordernow = (flat,soc,street,zip,value1,cardno,month,year,cvv,mobileno,uniqueid,name,navigation) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

    if(value1 == 0){
        if (flat == '' || soc == '' || street == '' || zip == '') {
            alert("Please provide all field !!");
        }else if (isNaN(zip)){
            alert("Digits only");
        }else if (zip.length != 6){
            alert("6 digits only");
        }
        else{
            navigation.navigate("ThankYouForOrdering",{mobileno,uniqueid,name})  
        }
    }if(value1 == 1){
        if (flat == '' || soc == '' || street == '' || zip == ''|| cardno == '' || month == ''|| year == '' || cvv =='') {
            alert("Please provide all field !!");
        }else if (isNaN(zip)){
            alert("Digits only");
        }else if (zip.length != 6){
            alert("6 digits only");
        }
        else if (cardno.length != 12){
            alert("Card no 12 digits only");
        }
        else if (isNaN(cardno)){
            alert("Digits only");
        }
        else if (isNaN(year)){
            alert("Digits only");
        }
        else if (year.length != 4){
            alert("Year 4 digits only");
        }
        else if (month.length > 2){
            alert("Month 2 digits only");
        }
        else if (month > 12){
            alert("Invalid Month digits only");
        }
        else if (isNaN(month)){
            alert("Digits only");
        } 
        else if (isNaN(cvv)){
            alert("Digits only");
        } 
        else if (cvv.length != 3){
            alert("CVV only 3 digits");
        } 
        else{
            navigation.navigate("ThankYouForOrdering",{mobileno,uniqueid,name});     
        }
    }
   
}

export default Billing

const styles = StyleSheet.create({
    cantainer: {
        backgroundColor: '#d9d9d9',
        flex: 1,
        height: 700,
    },
    img: {
        height: 50,
        width: 50,
        position: "absolute",
        marginLeft: 70,
        marginTop: 50,
    },

    navtext: {
        fontSize: 15,
        marginHorizontal: 10,
        marginVertical: 2,
        // marginLeft:100,
        alignSelf: "center",
        color: '#0D4C92',
        marginTop: 30,
    },
    subView: {
        backgroundColor: '#FFE9CD',
        height: 680,
        marginTop: 150,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    headerTxt1: {
        fontSize: 40,
        marginLeft: 125,
        fontWeight: 'bold',
        color: 'red',
        position: 'absolute',
        marginTop: 50,
    },
    headerTxt2: {
        fontSize: 17,
        marginLeft: 200,
        fontStyle: "italic",
        color: 'black',
        position: 'absolute',
        marginTop: 105,
        alignSelf: "center",
    },

    subTxt: {
        color: 'black',
        marginTop: 20,
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 40,
    },
    nameInput: {
        fontSize: 17,
        height: 40,
        width: 290,
        marginLeft: 40,
        borderBottomWidth: 1,
        marginTop: 30,
    },
    nameInput1: {
        fontSize: 17,
        marginLeft: 20,
        borderBottomWidth: 1,
        marginTop: 30,
        margin: 5,
        width: 100,
        height: 50,
    },
    nameInput2: {
        fontSize: 17,
        height: 50,
        width: 200,
        // marginLeft: 40,
        borderBottomWidth: 1,
        marginTop: 30,
    },
    
    nameInput3: {
        fontSize: 17,
        height: 50,
        width: 200,
        marginLeft: 40,
        // borderBottomWidth: 1,
        marginTop: 50,
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
        marginRight: 30,
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
        position: "absolute",
    },
});