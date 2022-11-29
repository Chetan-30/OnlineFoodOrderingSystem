import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Feedback = ({navigation,route}) => {
  const mobileno = route.params.mobileno ;
  const uniqueid = route.params.uniqueid ;
  const name = route.params.name ;
    const [defaultRating, setDefaultRating] = useState(2)
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5])
    const [feedback,setFeedback] = useState("");
    const starImgCorner = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png';
    const starImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png';

    const CustomRatingBar = () => {
        return (
            <View style={styles.customRatingBarStyle}>
                {
                    maxRating.map((item, key) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.7}
                                key={item}
                                onPress={() => setDefaultRating(item)}
                            >
                                <Image
                                    style={styles.starImgStyle}
                                    source={
                                        item <= defaultRating
                                            ? { uri: starImgFilled }
                                            : { uri: starImgCorner }
                                    }
                                />
                            </TouchableOpacity>
                        )
                    })
                }

            </View>
        )
    }


    return (
        <View style={styles.cantainer}>  
            <Text style={styles.headerTxt1}>Online Meals</Text>
            <Text style={styles.headerTxt2}>Unleash  the  foodie  in  you</Text>
            <Image source={require('../assets/logo1.png')} style={styles.img}></Image>
        <View style={styles.subView}>
            <Text style={styles.subTxt}>FeedBack</Text>
            <Text style={styles.text}>Give your feedback here:</Text>
            <TextInput multiline={true} numberOfLines={4} onChangeText={(e) =>setFeedback(e)} placeholder='Feedback ...' style={styles.TextInput}></TextInput>
             <Text style={styles.textStyle}>Please Rate us</Text>
             <CustomRatingBar />
             <Text style={styles.textStyle}>
                 {defaultRating + '/' + + maxRating.length}
             </Text>
            <TouchableOpacity style={styles.btn} onPress={() => Check(feedback,mobileno,uniqueid,name,navigation)}>
              <Text style={styles.btnTxt}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    

}
const Check = (feedback,mobileno,uniqueid,name,navigation) => {

    if (feedback == ""){
        alert("Fill all details");
    }
    else{
        alert("Feedback submitted successfully !");
        navigation.navigate("HomeScreen",{mobileno,uniqueid,name});
    }

  }

export default Feedback

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
})