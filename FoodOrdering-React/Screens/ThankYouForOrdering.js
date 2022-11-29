import { StyleSheet, Text, View,ScrollView,TouchableOpacity, SafeAreaView ,Image} from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";

const ThankYouForOrdering = ({navigation, route}) => {
  const mobileno = route.params.mobileno ;
  const uniqueid = route.params.uniqueid ;
  const name = route.params.name ;
  return (
    <ScrollView style={{ backgroundColor: "#006491", flex: 1 }}>
      <View
        style={{
          backgroundColor: "white",
          margin: 10,
          borderRadius: 6,
          padding: 10,
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 15 }}>
          Order has been accepted
        </Text>

        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          Arriving in 30 min
        </Text>

        
      </View>

      <View style={{alignItems:"center",justifyContent:"center"}}>
          <MapView
          style={{height:400,width:500}}
            initialRegion={{
              latitude: 19.0760,
              longitude: 72.8777,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
              <Marker coordinate={{latitude: 19.0760, longitude: 72.8777}}/>
          </MapView>
        </View>

        <View
        style={{
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          margin:10,
          borderRadius:8,
          marginTop:10,
        }}
      >
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            borderColor: "#fff0f5",
            borderWidth: 1,
          }}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLXBWH6Tl3ITRFCI-ByH7IR_c0gRQhRsXzQ&usqp=CAU",
          }}
        />
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "700", color: "#ff6e4a" }}>
            4 Riders near the restaurent
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "600", color: "#696969" }}>
            Anyone will pick your order
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate("HomeScreen",{mobileno,uniqueid,name})}>
              <Text style={styles.btnTxt}>Return</Text>
            </TouchableOpacity>

    </ScrollView>
  );
};

export default ThankYouForOrdering;

const styles = StyleSheet.create({
  btn: {
    height: 50,
    width: 200,
    backgroundColor: 'white',
    // color:"red",
    borderRadius: 80,
    borderWidth: 2,
    marginLeft: 90,
    marginTop: 30,
    marginBottom:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
  },
});