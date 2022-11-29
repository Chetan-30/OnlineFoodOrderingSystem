import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Pressable } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import ForgotPass from './Screens/ForgotPass';
import HomeScreen from './Screens/HomeScreen';
import PizzaScreen from './Screens/PizzaScreen';
import { BasketContext } from './Context';
import CartScreen from './Screens/CartScreen';
import Biryani from './Screens/Biryani';
import Dosa from './Screens/Dosa';
import Momos from './Screens/Momos';
import Burger from './Screens/Burger';
import Dessert from './Screens/Dessert';
import Billing from './Screens/Billing';
import ThankYouForOrdering from './Screens/ThankYouForOrdering';
import OrderHistory from './Screens/OrderHistory';
import Feedback from './Screens/Feedback';
import AboutUs from './Screens/AboutUs';
import LocateUs from './Screens/LocateUs';
import UserProfile from './Screens/UserProfile';

export default function App() {
  const Stack = createNativeStackNavigator();

  return(
    <BasketContext>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="ForgotPass" component={ForgotPass}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="PizzaScreen" component={PizzaScreen} options={{headerShown:true}}/>
        <Stack.Screen name="Burger" component={Burger} options={{headerShown:true}}/>
        <Stack.Screen name="Dessert" component={Dessert} options={{headerShown:true}}/>
        <Stack.Screen name="Dosa" component={Dosa} options={{headerShown:true}}/>
        <Stack.Screen name="Momos" component={Momos} options={{headerShown:true}}/>
        <Stack.Screen name="Biryani" component={Biryani} options={{headerShown:true}}/>
        <Stack.Screen name="CartScreen" component={CartScreen} options={{headerShown:true}} />
        <Stack.Screen name="Billing" component={Billing}/>
        <Stack.Screen name="ThankYouForOrdering" component={ThankYouForOrdering} options={{headerShown:true}}/>
        <Stack.Screen name="OrderHistory" component={OrderHistory} options={{headerShown:true}}/>
        <Stack.Screen name="Feedback" component={Feedback}/>
        <Stack.Screen name="AboutUs" component={AboutUs}/>
        <Stack.Screen name="LocateUs" component={LocateUs}/>
        <Stack.Screen name="UserProfile" component={UserProfile}/>
        
      </Stack.Navigator>
    <StatusBar style="auto"/> 
    </NavigationContainer>
    </BasketContext>
  );
}


