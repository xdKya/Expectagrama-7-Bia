import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./stack";
import Profile from "../screens/profile";
import Logout from "../screens/logout";
import BottomTabNavigator from "./tabnavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={StackNavigator}
        options={{ unmountOnBlur: true }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ unmountOnBlur: true }}
      /> 
       <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{ unmountOnBlur: true }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
