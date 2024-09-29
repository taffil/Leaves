import {
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
  View,
} from "react-native";
import Text16 from "../../components/Text/Text16";
import { Controller, useForm } from "react-hook-form";
import Input from "../../components/Inputs/Input";
import TextError from "../../components/Text/TextError";
import Button from "../../components/Buttons/Button";
import { LoginRequest, TokenPayload } from "../../types";
import { useLoginMutation } from "../../services/api/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../services/slices/authSlice";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";

const Login = () => {
  const [login, { isLoading, isError, error, isSuccess }] = useLoginMutation();
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginRequest) => {
    // await login(data);
    const decoded = jwtDecode<TokenPayload>(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NThkZmNiNmY3ZDBlOWIzYWU1NmRkMTEiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MjU3MTgyOTEsImV4cCI6MTcyNTcyMTg5MX0.FjSAkZdtvtwOeGai_23KH-dDtNAO6F-_tB5EKSr8PA0"
    );
    dispatch(
      setUser({
        token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NThkZmNiNmY3ZDBlOWIzYWU1NmRkMTEiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MjU3MTgyOTEsImV4cCI6MTcyNTcyMTg5MX0.FjSAkZdtvtwOeGai_23KH-dDtNAO6F-_tB5EKSr8PA0",
        id: "658dfcb6f7d0e9b3ae56dd11",
        username: "tafil",
        employeeId: "658dfc6af7d0e9b3ae56dcf2",
        firstName: "Tafil",
        lastName: "Osmani",
        avatar:
        "png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
        admin: true,
      })
    );
  };

  useEffect(() => {
    if (isSuccess) {
      console.log("Success");
    }
    if (isError) {
      console.log("Error");
    }
  }, [isSuccess]);

  return (
    <KeyboardAvoidingView className="flex-1" behavior="padding">
      <ScrollView
        className="bg-white dark:bg-zinc-800 p-5 flex-col gap-y-5"
        keyboardShouldPersistTaps="handled"
        scrollEnabled={false}
      >
        <View>
          <Text16 className="ml-1">Username:</Text16>
          <Controller
            control={control}
            rules={{
              required: { value: true, message: "Username is required" },
            }}
            name="username"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Username"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.username}
                autoCapitalize="none"
              />
            )}
          />
          {errors.username && <TextError>{errors.username.message}</TextError>}
        </View>
        <View>
          <Text16 className="ml-1">Password:</Text16>
          <Controller
            control={control}
            rules={{
              required: { value: true, message: "Password is required" },
            }}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.password}
                textContentType="password"
                secureTextEntry={true}
              />
            )}
          />
          {errors.password && <TextError>{errors.password.message}</TextError>}
          {isError && <TextError>{error.error}</TextError>}
        </View>
        <View>
          <Button
            type="primary"
            className="mb-1"
            onPress={handleSubmit(onSubmit)}
            disabled={isLoading}
          >
            {isLoading ? <ActivityIndicator color={"#000"} /> : "Login"}
          </Button>
          {/* <View className="flex-row justify-end">
            <Button type="transparent">Forgot Password</Button>
          </View> */}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
