import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const AboutUs = ({navigation,route}) => {
  const mobileno = route.params.mobileno ;
  const uniqueid = route.params.uniqueid ;
  const name = route.params.name ;

    return (
        <View style={styles.cantainer}>  
            <Text style={styles.headerTxt1}>Online Meals</Text>
            <Text style={styles.headerTxt2}>Unleash  the  foodie  in  you</Text>
            <Image source={require('../assets/logo1.png')} style={styles.img}></Image>
        <View style={styles.subView}>
            <Text style={styles.subTxt}>About Us</Text>
            <Text style={{marginTop:20, marginLeft:50,fontSize:20,color:"red"}}>Extraordinary FOOD COMES FIRST</Text>
            <Text style={styles.file}>At OnlineMeals , we’re tied in with presenting crisp food, regardless of whether it implies going the additional mile. When you stroll through our entryways, we do what we can to make everybody feel comfortable in light of the fact that our family stretches out through your locale.</Text>
            <Text style={styles.file}>OnlineMeals is an organization that is continually developing. From the principal eatery in 1969, we’ve kept on extending’ vision to help other individuals end up effective entrepreneurs by owning an OnlineMeals establishment. We search for franchisees who are focused on quality, not compromising.</Text>
            <Text style={styles.file}>We Believe in Quality. All around. Quality food can’t be made without quality initiative. Find out about the general population driving The ‘OnlineMeals’.</Text>
          </View>
        </View>
      );
    

}

export default AboutUs

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: "center",
    },
    text:{fontSize:20, marginHorizontal:10, marginVertical:5,marginTop:25, color:'#0D4C92'},
    textStyle: {
        textAlign: "center",
        fontSize: 23,
        marginTop: 20
    },
    customRatingBarStyle: {
        justifyContent: "center",
        flexDirection: "row",
        maginTop: 30
    },
    starImgStyle: {
        width: 40,
        height: 40,
        resizeMode: 'cover'
    },
    TextInput:
    {
        height: 100,
        width: 400,
        borderWidth: 1,
        paddingLeft: 20,
        borderRadius: 10,
        margin: 7,
        backgroundColor: 'white',
        fontSize:16,
    },
    cantainer: {
        backgroundColor: '#d9d9d9',
        flex:1,
        height: 700,
      },
      img:{
          height:130,
          width:165,
          alignSelf:"center",
          // marginLeft:30,
        //   marginTop:20,
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
          height: 530,
          marginTop: 75,
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
          marginTop: 125,
        },
        headerTxt2: {
          fontSize: 17,
          marginLeft: 140,
         fontStyle:"italic",
          color: 'black',
          position: 'absolute',
          marginTop: 170,
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
        file:{
            margin:10,
            textAlign:"justify",
            fontSize:16
        }
})