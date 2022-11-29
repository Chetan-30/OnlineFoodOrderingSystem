import { StyleSheet, Text, View, SafeAreaView, FlatList, Pressable } from 'react-native'
import React, {useContext} from 'react'
import pizza from "../data/pizza";
//import { Ionicons } from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import PizzaComponent from "../components/PizzaComponent";
import { CartItems } from "../Context";

const PizzaScreen = ({navigation, route}) => {
  const mobileno = route.params.mobileno ;
  const uniqueid = route.params.uniqueid ;
  const name = route.params.name ;
    const data = pizza;
    const {cart, SetCart} = useContext(CartItems);
    const total = cart
    .map((item) => Number(item.price * item.quantity))
    .reduce((prev, curr) => prev + curr, 0);
    console.log(uniqueid);
    
  return (
    <SafeAreaView>
 
    <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => <PizzaComponent pizza={item} />}
      />

      {total ===0 ? null : (
        <Pressable onPress={() => navigation.navigate("CartScreen",{mobileno,uniqueid,name})}
         style={{
          backgroundColor:"red",
          // backgroundColor:"green",
            padding: 10,
            position:"absolute",
            bottom:100,
            left:150,
            borderRadius:6,
        }}
        >
          <Text
          style={{
            textAlign:"center",
            fontWeight:"bold",
            fontSize:16,
            color:"white",
          }}
          >Go to Cart
          </Text>
          </Pressable>
      )}
    </SafeAreaView> 
  );
  
}

export default PizzaScreen

const styles = StyleSheet.create({})