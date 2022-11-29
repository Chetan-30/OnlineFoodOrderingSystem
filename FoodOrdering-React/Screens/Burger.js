import { StyleSheet, Text, View, SafeAreaView, FlatList, Pressable } from 'react-native'
import React, {useContext} from 'react'
import burger from "../data/burger";
//import { Ionicons } from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import PizzaComponent from "../components/PizzaComponent";
import { CartItems } from "../Context";

const Burger = ({navigation, route}) => {
  const mobileno = route.params.mobileno ;
  const uniqueid = route.params.uniqueid ;
  const name = route.params.name ;
    const data = burger;
    const {cart, SetCart} = useContext(CartItems);
    const total = cart
    .map((item) => Number(item.price * item.quantity))
    .reduce((prev, curr) => prev + curr, 0);
    
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

export default Burger

const styles = StyleSheet.create({})