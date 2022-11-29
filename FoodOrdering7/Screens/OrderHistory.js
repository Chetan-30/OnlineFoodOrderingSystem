import { StyleSheet,ScrollView, Text, View, Image, FlatList,} from 'react-native';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const OrderHistory = ({navigation,route}) => {
    const mobileno = route.params.mobileno;
    const uniqueid = route.params.uniqueid;
    const name = route.params.name ;
    const [transactions, setTransactions] = useState([]);
    console.log(uniqueid);
    console.log(mobileno);

    useEffect(() => {
        loadhistory();
    }, []);

    const loadhistory = async () => {
        const response = await axios.get("http://192.168.0.105:8085/Customer/orderhistory/" + uniqueid);
        console.log(response.data);
        setTransactions(response.data);
    }

  return (
    <ScrollView style={styles.cantainer}>  
    <Text style={styles.headerTxt1}>Online Meals</Text>
    <Text style={styles.headerTxt2}>Unleash  the  foodie  in  you</Text>
    <Image source={require('../assets/logo1.png')} style={styles.img}></Image>
<View style={styles.subView}>
    <Text style={styles.subTxt}>Order History</Text>
  
    <View style={styles.container}>
             <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:30}}>
                 <Text style={[styles.tbcell2,{backgroundColor:'white',color:'black',fontWeight:"bold"}]}>Items Ordered</Text>
                 <Text style={[styles.tbcell1,{backgroundColor:'white',color:'black',fontWeight:"bold"}]}>Amount</Text>
        
             </View>  
             <FlatList data={transactions} renderItem={(e) => {
                 return  <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                             <Text style={styles.tbcell}>{e.item.items}</Text>
                             <Text style={styles.tbcell1}>{e.item.price}</Text>

                         </View>
             }} />  
         </View>    


  </View>
</ScrollView>

  )
}

export default OrderHistory

const styles = StyleSheet.create({
    cantainer: {
        backgroundColor: '#d9d9d9',
        flex:1,
        height: 600,
      },
      img:{
          height:125,
          width:165,
          alignSelf:"center",
          // marginLeft:30,
        //   marginTop:20,
          // flex:1,
      },
    subView: {
        backgroundColor: '#FFE9CD',
        height: 530,
        marginTop: 80,
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
        marginLeft: 200,
  
       fontStyle:"italic",
        color: 'black',
        position: 'absolute',
        marginTop: 170,
        alignSelf:"center",
      },
    tbcell:{
        borderWidth:1,
        // borderRadius:1,
        width:205,
        height:90,
        paddingLeft:25,
        paddingTop:10,
        borderRadius:5,
        backgroundColor:"#B8F4BC",
        color:"red",
        align:"center",
        fontWeight:"bold",
        justifyContent:"center",
        },
    tbcell2:{
        borderWidth:1,
        // borderRadius:1,
        width:205,
        height:90,
        paddingLeft:45,
        paddingTop:30,
        borderRadius:5,
        backgroundColor:"#B8F4BC",
        color:"red",
        align:"center",
        fontWeight:"bold",
        justifyContent:"center",
        },
    tbcell1:{
        borderWidth:1,
        // borderRadius:1,
        width:205,
        height:90,
        paddingLeft:75,
        paddingTop:30,
        borderRadius:5,
        backgroundColor:"#B8F4BC",
        color:"red",
        align:"center",
        fontWeight:"bold",
        justifyContent:"center",
        },

    subTxt: {
      color: 'black',
      marginTop: 10,
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
      // color:"red",
      fontSize:16,
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
      marginRight:20,
    },
    dropdown: {
      marginTop:20,
      margin: 16,
      height: 50,
      width:290,
      marginLeft:40,
      marginBottom:1,
      borderBottomWidth: 1,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
  
  });