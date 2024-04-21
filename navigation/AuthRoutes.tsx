import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Text16 from "../components/Text/Text16";
import Input from "../components/Inputs/Input";
import Button from "../components/Buttons/Button";

const Login = () => {
  return (
    <View className="flex-1 px-5 bg-white py-5 gap-5">
      <View>
        <Text16 className="ml-1">Email:</Text16>
        <Input placeholder="Email" />
      </View>
      <View>
        <Text16 className="ml-1">Password:</Text16>
        <Input placeholder="Password" />
      </View>
      <View>
        <Button type="primary" text="Login" className="mb-3" />
        <Text16 className="self-end">Forgot password?</Text16>
      </View>
    </View>
  );
};

const Stack = createNativeStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerStyle: {
            backgroundColor: "#f3f4f6",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
