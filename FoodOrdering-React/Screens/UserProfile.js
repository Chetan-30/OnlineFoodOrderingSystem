import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const UserProfile = ({navigation,route}) => {

  const mobileno = route.params.mobileno ;
  const name = route.params.name ;
  const password = route.params.password;
  const email = route.params.email;  

  return (
    <View style={styles.cantainer}>
      <Text style={styles.headerTxt1}>Online Meals</Text>
            <Text style={styles.headerTxt2}>Unleash  the  foodie  in  you</Text>
            <Image source={require('../assets/logo1.png')} style={styles.img}></Image>
      <View style={styles.subView}>
        <Text style={styles.subTxt}>View Details </Text>
        
        <Text style={styles.format}>Name         : {name}</Text>
        <Text style={styles.format}>Mobile No  : {mobileno}</Text>
        <Text style={styles.format}>Email Id       : {email}</Text>
        <Text style={styles.format}>Password    : {password}</Text>


      </View>
    </View>
  );

}

export default UserProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
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
      backgroundColor: 'yellow',
      height: 460,
      marginTop: 100,
      borderTopRightRadius: 40,
      borderTopLeftRadius: 40,
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
     img:{
      height:130,
      width:165,
      alignSelf:"center",
      // marginLeft:30,
    //   marginTop:20,
      // flex:1,
  },
  
    subTxt: {
      color: 'black',
      marginTop: 20,
      fontSize: 30,
      fontWeight: 'bold',
      marginLeft: 40,
    },
    format:{
      marginLeft:20,
      marginTop:30,
      fontSize:16,
      fontWeight: 'bold',
    }
  
  });