import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import React from "react";
import { View } from "react-native";
import Dashboard from "../screens/Dashboard";
import Profile from "../screens/Profile";
import LeaveApprovals from "../screens/LeaveApprovals";
import LeaveRequests from "../screens/LeaveRequests";
import { Avatar } from "react-native-paper";
import Button from "../components/Buttons/Button";
import { useColorScheme } from "nativewind";
import { useDispatch } from "react-redux";
import { logout } from "../services/slices/authSlice";
import Text14 from "../components/Text/Text14";

const drawerItemStyle = {
  drawerActiveBackgroundColor: "#ffffff",
  drawerActiveTintColor: "#0f172a",
  drawerInactiveTintColor: "#ffffff",
  drawerLabelStyle: {
    fontFamily: "ProductSans-bold",
  },
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const dispatch = useDispatch();

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <View>
        <View className="py-5 items-center">
          {!require("../assets/icon.png") ? (
            <Avatar.Image source={require("../assets/icon.png")} />
          ) : (
            <Avatar.Text label="JD" />
          )}
          <Text14 className="font-bold mt-2 text-gray-400">
            Welcome on board Halil
          </Text14>
        </View>
        <DrawerItemList {...props} />
      </View>
      <View className="p-5 pb-10 flex-col gap-y-3">
        {/* <Button
          type="transparent"
          textProps={{ style: { color: "white" } }}
          onPress={() => {
            toggleColorScheme();
            setTimeout(() => dispatch(setDarkMode(colorScheme !== "dark")), 50);
          }}
          icon={
            <Icon
              source={
                colorScheme === "dark" ? "white-balance-sunny" : "weather-night"
              }
              color="white"
              size={20}
            />
          }
        >
          {colorScheme === "dark" ? "Light Mode" : "Dark Mode"}
        </Button> */}
        <Button
          type="secondary"
          onPress={() => {
            dispatch(logout());
          }}
        >
          Logout
        </Button>
      </View>
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();

const ProtectedRoutes = () => {
  const { colorScheme } = useColorScheme();

  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        drawerStyle: {
          backgroundColor: colorScheme === "dark" ? "#18181b" : "#0f172a",
        },
        headerTintColor: colorScheme === "dark" ? "#f9fafb" : "#0f172a",
        headerStyle: {
          backgroundColor: colorScheme === "dark" ? "#18181b" : "#f8fafc",
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTitleStyle: {
          fontFamily: "ProductSans-bold",
        },
      }}
      drawerContent={CustomDrawerContent}
    >
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ ...drawerItemStyle, title: "Dashboard" }}
      />
      <Drawer.Screen
        name="LeaveRequests"
        component={LeaveRequests}
        options={{ ...drawerItemStyle, title: "Leave Requests" }}
      />
      <Drawer.Screen
        name="LeaveApprovals"
        component={LeaveApprovals}
        options={{ ...drawerItemStyle, title: "Leave Approvals" }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ ...drawerItemStyle, title: "Profile" }}
      />
    </Drawer.Navigator>
  );
};

export default ProtectedRoutes;
