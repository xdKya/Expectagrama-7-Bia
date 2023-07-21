import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./screens/login";
import RegisterScreen from "./screens/register";

import firebase from "firebase";
//import "firebase/auth";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="Dashboard" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}
