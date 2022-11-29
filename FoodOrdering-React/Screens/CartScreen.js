import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { CartItems } from "../Context";
//import { Entypo } from "@expo/vector-icons";
//import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';

const CartScreen = ({navigation, route}) => {
  const mobileno = route.params.mobileno ;
  const uniqueid = route.params.uniqueid ;
  const name = route.params.name ;
  const { cart, setCart } = useContext(CartItems);
  const name1 = cart.map((item) => (item.name));
  const name2 = cart.map((item) => (item.quantity));
  const [couponcode, setCouponcode] = useState('');
  // console.log(uniqueid);

  let total = cart
    .map((item) => Number(item.price * item.quantity))
    .reduce((prev, curr) => prev + curr, 0);
   var final = total;
  let [price, setPrice] = useState(total);
    const verifycoupon = () =>{
      if(couponcode === "FLAT100"){
        setPrice(total-100)
        console.log(setPrice);
      }
    }


  const sides = [
    {
      id: "50",
      name: "7Up (500ml)",
      image: "https://www.dominos.co.in/files/items/7up.png",
      price: 56,
      description: "cool drink ",
      quantity: 1,
    },
    {
      id: "51",
      name: "lava cake",
      image: "https://www.dominos.co.in/files/items/choco-lava-cake-771.jpg",
      price: 80,
      description: "Filled with delecious molten chocolate inside",
      quantity: 1,
    },
    {
      id: "52",
      name: "BLACK FOREST",
      description: "Extra touch of flavourful chocolate forest trifles",
      image: "https://drive.google.com/uc?export=view&id=1-UtepLlS4fjYx-hCHwe5vxfFcB5hEa0T",
      price: 130,
      quantity: 1,
    },
    {
      id: "53",
      name: "ARABIC PUDDING",
      description:
        "A tasty slice of arabic taste of pudding with dryfruits",
      image: "https://drive.google.com/uc?export=view&id=1nMzWKovj_sdkko5E_GEtS7fjTJcJTnuH",
      price: 100,
      quuantity:1,
    },
  ];
  const addToCart = (item) => {
    setCart([...cart, item]);
    price = total;
  };
  const placeOrder = () => {
  //  
      console.log("Your total is: ",total);
      console.log("Your items are: ",name1);
      console.log(mobileno);
      navigation.navigate("Billing",{mobileno,uniqueid,name});

      axios({
        method: 'POST',
        url: 'http://192.168.0.105:8085/insertitem', 
        data:{
          "mobileno": mobileno,
          "price": price,
          "items": name1,
          "uniqueid":uniqueid,
      }
      }).then(function(response){
          console.log("response",JSON.stringify(response.data));
          // alert(JSON.stringify(response.data));
          // navigation.navigate("Login");
      }).catch(function(error){
          console.log("error",JSON.stringify(error));
          alert(JSON.stringify(error));
      })

    setCart([])
  }
  return (
    <>
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {cart.map((item, key) => (

            <Pressable
              style={{
                // backgroundColor: "#006491",
                backgroundColor: "green",
                padding: 10,
                margin: 10,
                borderRadius: 8,
              }}
              key={key}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={{ width: 70, height: 70, borderRadius: 6 }}
                  source={{ uri: item.image }}
                />

                <View style={{ marginLeft: 10 }}>
                  <Text
                    style={{ fontSize: 16, fontWeight: "bold", color: "white" }}
                  >
                    {item.name}
                  </Text>

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginVertical: 6,
                    }}
                  >
                    <Text style={{color: "white", fontSize: 17, fontWeight:"bold"}}>
                      {item.quantity}
                    </Text>
                    <Text style={{ color: "white", fontSize: 15 }}>
                      {" "}
                      | {item.description.substr(0, 25) + "..."}
                    </Text>
                  </View>

                  <Text style={{ color: "white", fontSize: 16 }}>
                    ₹{item.price * item.quantity}
                  </Text>
                </View>
              </View>
            </Pressable>
          ))}
          <View>
            <Text style={{fontSize:18,fontWeight: "bold",padding:8}}> People Also Ordered</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {sides.map((item, index) => (
                <Pressable
                  style={{
                    margin: 10,
                    backgroundColor: "#E8E8E8",
                    borderRadius: 4,
                    width: 160,
                    height: 130,
                  }}
                >
                  <View
                    style={{
                      padding: 10,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      style={{ width: 60, height: 60, borderRadius: 6 }}
                      source={{ uri: item.image }}
                    />
                    <View style={{ marginLeft: 10 }}>
                      <Text style={{ width: 70, fontSize: 15 }}>
                        {item.name}
                      </Text>
                      <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                        ₹{item.price}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      borderColor: "#BEBEBE",
                      borderRadius: 1,
                      borderStyle: "dotted",
                      borderWidth: 0.5,
                      marginTop: 3,
                    }}
                  />
                  <Pressable onPress={() => addToCart(item)}>
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 16,
                        color: "green",
                        marginTop: 10,
                        fontWeight: "600",
                      }}
                    >
                      ADD TO CART
                    </Text>
                  </Pressable>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </View>

      {total === 0 ? (
         <Pressable
         style={{
           marginBottom: "auto",
           marginTop: "auto",
           alignItems: "center",
           justifyContent: "center",
           height: "100%",
         }}
       >
         <Text style={{ marginTop: 20, fontSize: 20, fontWeight: "500" }}>
           Cart is empty!
         </Text>
         <Image
           style={{
             width: 250,
             height: 600,
             resizeMode: "contain",
           }}
           source={{
             uri: "https://drive.google.com/uc?export=view&id=1FNQxeGCJI2X0KVf8LJqbAWjt7R-kRO4q",
           }}
         />
       </Pressable>
      ) : (
        <View style={{ height: 200 }}>

      <TextInput style={styles.nameInput} placeholder="Coupon Code" onChangeText={(e) =>setCouponcode(e)} />

      <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={verifycoupon}>
                <Text style={{color:'blue', fontSize:18, margin:2}}>APPLY</Text>
                </TouchableOpacity>
      </View>

        <View
          style={{ margin: 10, flexDirection: "row", alignItems: "center" }}
        >
          {/* <FontAwesome5 name="amazon-pay" size={24} color="black" /> */}
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>Final Price :- ₹{price}</Text>
            <Text
              style={{ fontSize: 16, width: 200, marginTop: 3, color: "gray" }}
            >
              
            </Text>
          </View>
        </View>
        <Pressable
        onPress={() =>placeOrder()}
        // onPress={() =>navigation.navigate("Billing",{mobileno})}
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "green",
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text
            style={{ textAlign: "center", color: "white", fontWeight: "bold" }}
          >
            Continue
          </Text>
        </Pressable>
      </View>
      )}  
     
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    // flex: 1,
    height: 50,
    width: 175,
    // backgroundColor: '#ffffcc',
    // borderRadius: 80,
    // borderWidth: 2,
    marginLeft: 200,
    marginTop: 28,
    justifyContent: 'center',
    alignItems: 'center',
    position:"absolute",
  },
  nameInput: {
    fontSize:17,
    height: 40,
    width: 290,
    marginLeft: 40,
    borderBottomWidth: 1,
    marginTop: 30,
  },
});