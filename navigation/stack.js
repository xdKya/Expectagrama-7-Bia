import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//import StackNavigator from "./stackNavigator";
//import Profile from "../screens/profile";
//import Logout from "../screens/logout";
import BottomTabNavigator from "./tabnavigator";
import PostScreen from "../screens/postscreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Bottomtab"
        component={BottomTabNavigator}
        options={{ unmountOnBlur: true }}
      />
       <Stack.Screen
        name="Post"
        component={PostScreen}
        options={{ unmountOnBlur: true }}
      />
      {/* <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{ unmountOnBlur: true }}
      /> */}
    </Stack.Navigator>
  );
};

export default StackNavigator;