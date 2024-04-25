import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Text16 from "../components/Text/Text16";
import Input from "../components/Inputs/Input";
import Button from "../components/Buttons/Button";
import { Controller, useForm } from "react-hook-form";
import TextError from "../components/Text/TextError";
import { useColorScheme } from "nativewind";

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <KeyboardAvoidingView className="flex-1" behavior="padding">
      <ScrollView
        className="bg-white dark:bg-zinc-800 p-5 flex-col gap-y-5"
        keyboardShouldPersistTaps="handled"
      >
        <View>
          <Text16 className="ml-1">Email:</Text16>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.email}
              />
            )}
          />
          {errors.email && <TextError>Email is required.</TextError>}
        </View>
        <View>
          <Text16 className="ml-1">Password:</Text16>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.password}
              />
            )}
          />
          {errors.password && <TextError>Password is required.</TextError>}
        </View>
        <View>
          <Button
            type="primary"
            className="mb-1"
            onPress={handleSubmit(onSubmit)}
          >
            Login
          </Button>
          <View className="flex-row justify-end">
            <Button type="transparent">Forgot Password</Button>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const Stack = createNativeStackNavigator();

const AuthRoutes = () => {
  const { colorScheme } = useColorScheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTintColor: colorScheme === "dark" ? "#f9fafb" : "#0f172a",
          headerStyle: {
            backgroundColor: colorScheme === "dark" ? "#18181b" : "#f8fafc",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
