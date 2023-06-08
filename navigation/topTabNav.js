import React from "react";
import PopularScreen from "../screens/Popular";
import RecommendedScreen from "../screens/Recommendation"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { RFValue } from "react-native-responsive-fontsize";

const AppTopNavigation = createMaterialTopTabNavigator();

export default function TopTabNav() {
  return (
    <AppTopNavigation.Navigator  screenOptions={{
      tabBarLabelStyle: { fontSize: RFValue(12) ,color:"white",fontFamily:"monospace"},
      tabBarItemStyle: { borderLeftWidth:1,borderColor:"#3c8ed9" },
      tabBarStyle: { backgroundColor: '#3D550C' },
    }}>
      <AppTopNavigation.Screen name="Popular" component={PopularScreen} />
      <AppTopNavigation.Screen name="Recommended" component={RecommendedScreen} />
    </AppTopNavigation.Navigator>
  );
}
