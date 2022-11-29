import { StyleSheet, Text,ImageBackground, View, SafeAreaView,TouchableOpacity, Image, ScrollView, Pressable } from 'react-native';
import React, {useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import { CartItems } from "../Context";

const HomeScreen = ({navigation, route}) => {
  const mobileno = route.params.mobileno ;
  const name = route.params.name ;
  const password = route.params.password;
  const email = route.params.email;
  const uniqueid = route.params.uniqueid ;

    const data = [
        {
          id: "0",
         image:"https://drive.google.com/uc?export=view&id=1LvcQ03ZSqKmdrpDvM54u1zRpJvdYJv3z",
        
        },
        {
          id: "1",
         image:"https://drive.google.com/uc?export=view&id=1GQl_H42255bQpjqZK5VncuOYnT33N-bL",
         
        },
        {
          id: "2",
          image:"https://drive.google.com/uc?export=view&id=11jPspjMCVw4doVcY_Zo6d7gKlEnpv2sB",        
        },
        {
          id: "3",
          image:"https://drive.google.com/uc?export=view&id=1h1FfwGdHkJDmhjN6LFODijJZH4oUtQVr",
        },
        {
          id: "4",
          image:"https://drive.google.com/uc?export=view&id=12DLhEa3arGa8NJqbmiQe70DXu731B_iD",
        },
        {
          id: "5",
          image:"https://drive.google.com/uc?export=view&id=1n-ETPij5gIRsGE-ZcPhQyvjO4canQvC8",

        },
      ];

  return (

    <ScrollView style={{backgroundColor:"#FFFDD0"}}>
     
     <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 30,
          }}>
          <Text style={{fontSize: 18, marginLeft:90}}>
            Hello {name}
          </Text>
          <TouchableOpacity style={{marginRight:90}} onPress={() => navigation.navigate("UserProfile",{mobileno,name,email,password,uniqueid})}>
            <ImageBackground
              source={require('../assets/user-profile.jpg')}
              style={{width: 35, height: 35}}
              imageStyle={{borderRadius: 25}}
            />
          </TouchableOpacity>
        </View>

      <ScrollView horizontal  showsHorizontalScrollIndicator={false}>
        {data.map((item, key) => (
          <View style={{ margin: 10,marginTop:30 }} key={key}>
            <Image
              style={{ width: 220, height: 130 }}
              source={{ uri: item.image }}
            />
          </View>
        ))}
      </ScrollView>


    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 17, fontWeight: "bold" }}>Order Now</Text>
      <Pressable
        style={{
          backgroundColor: "#cfd7f0",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding:20,
          marginTop:14,
          // borderRadius:10,
          borderTopRightRadius:25,
          borderTopLeftRadius:25,
        }}
      >
        <Pressable onPress={() => navigation.navigate("PizzaScreen",{mobileno,uniqueid,name})}>
          <Image 
            style={{ width: 80, height: 80, borderRadius: 40 }}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO-EGo_uL2gQ69jPMfofs6o-T4WFTeFIH1eg&usqp=CAU",
            }}
          />
          <Text style={{textAlign: "center",fontSize:17,color:"black",marginTop:10,}}>Pizzas</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Dosa",{mobileno,uniqueid,name})}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 40 }}
            source={{
              uri: "https://drive.google.com/uc?export=view&id=1afOUYltxKAe2Z-5poYfX1WMkk2HBPlrP",
            }}
          />
          <Text style={{textAlign: "center",fontSize:17,color:"black",marginTop:10,}}>Dosa</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Burger",{mobileno,uniqueid,name})}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 40 }}
            source={{
              uri: "https://drive.google.com/uc?export=view&id=15S8fCBXgVIfh6lgS0HmBnYM3iQbOF6Zj",
            }}
          />
          <Text style={{textAlign: "center",fontSize:17,color:"black",marginTop:10,}}>Burger</Text>
        </Pressable>
      </Pressable>

      <Pressable 
        style={{
          backgroundColor: "#cfd7f0",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding:20,
          // marginTop:14,
          // borderRadius:10,
          borderBottomRightRadius:25,
          borderBottomLeftRadius:25,
        }}
      >
        <Pressable onPress={() => navigation.navigate("Momos",{mobileno,uniqueid,name})}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 40 }}
            source={{
              uri: "https://drive.google.com/uc?export=view&id=1cr4ZWQbW5P3091rocn2_sNxTYhPSvwxF",
            }}
          />
          <Text style={{textAlign: "center",fontSize:17,color:"black",marginTop:10,}}>Momos</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Biryani",{mobileno,uniqueid,name})}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 40 }}
            source={{
              uri: "https://drive.google.com/uc?export=view&id=1OXL6aQ1efsMlgpi8marT4D11tMLMvI_l",
            }}
          />
          <Text style={{textAlign: "center",fontSize:17,color:"black",marginTop:10,}}>Biryani</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Dessert",{mobileno,uniqueid,name})}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 40 }}
            source={{
              uri: "https://drive.google.com/uc?export=view&id=12TnyePqWWKF4jBLwztLcLj4rYIygkHAI",
            }}
          />
          <Text style={{textAlign: "center",fontSize:17,color:"black",marginTop:10,}}>Dessert</Text>
        </Pressable>
      </Pressable>

    </View>

    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 17, fontWeight: "bold" }}>Explore</Text>
      <Pressable
        style={{
          backgroundColor: "#cfd7f0",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding:20,
          marginTop:14,
          // borderRadius:10,
          borderTopRightRadius:25,
          borderTopLeftRadius:25,
        }}
      >
        <Pressable onPress={() => navigation.navigate("CartScreen",{mobileno,uniqueid,name})}>
          <Image 
            style={{ width: 80, height: 80, borderRadius: 40 }}
            source={{
              uri: "https://drive.google.com/uc?export=view&id=1JEWcx8D-DS5CseNEW045ywGxyk75c1uM",
            }}
          />
          <Text style={{textAlign: "center",fontSize:17,color:"black",marginTop:10,}}>Cart</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("OrderHistory",{mobileno,uniqueid,name})}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 40 }}
            source={{
              uri: "https://drive.google.com/uc?export=view&id=1BFIvpS_Z9E7iKeJhFoz2bXYjozN7_llZ",
            }}
          />
          <Text style={{textAlign: "center",fontSize:16,color:"black",marginTop:10,}}>Order History</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Feedback",{mobileno,uniqueid,name})}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 40 }}
            source={{
              uri: "https://drive.google.com/uc?export=view&id=1k_1pGO4Ez8Qz8ACEl9IIWAstwd1IfoBt",
            }}
          />
          <Text style={{textAlign: "center",fontSize:17,color:"black",marginTop:10,}}>Feedback</Text>
        </Pressable>
      </Pressable>

      <Pressable 
        style={{
          backgroundColor: "#cfd7f0",
          flexDirection: "row",
          alignItems: "center",
          // justifyContent: "space-between",
          padding:20,
          // marginTop:14,
          // borderRadius:10,
          borderBottomRightRadius:25,
          borderBottomLeftRadius:25,
        }}
      >
        <Pressable onPress={() => navigation.navigate("AboutUs",{mobileno,uniqueid,name})}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 40,marginLeft:60 }}
            source={{
              uri: "https://drive.google.com/uc?export=view&id=1NZFGCB-8CUc34HBiYkDPjpJJKq-gAmIO",
            }}
          />
          <Text style={{textAlign: "center",fontSize:17,color:"black",marginTop:10,marginLeft:60}}>About Us</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("LocateUs",{mobileno,uniqueid,name})}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 40,marginLeft:80 }}
            source={{
              uri: "https://drive.google.com/uc?export=view&id=1gqqL8YAH41m3grHLusCZ2B6PJMNnA9OE",
            }}
          />
          <Text style={{textAlign: "center",fontSize:17,color:"black",marginTop:10,marginLeft:80}}>Locate us</Text>
        </Pressable>

      </Pressable>

    </View>


      <View style={{ padding: 10 }}>
        <Image
          style={{ width: "100%", height: 120, borderRadius: 7 }}
          source={{
            uri: "https://drive.google.com/uc?export=view&id=19kATM3s3upfwhGZRUaa8DDZGJ3-X6422",
          }}
        />
      </View>

      <View style={{ padding: 10 }}>
        <Image
          style={{ width: "100%", height: 120, borderRadius: 7 }}
          source={{
            uri: "https://drive.google.com/uc?export=view&id=1VLP1HFgmEnUbKMhd5H95MI2RDR5lNKKs",
          }}
        />
      </View>

      </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({})