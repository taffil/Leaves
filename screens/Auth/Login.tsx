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
import { LoginRequest } from "../../types";
import { useLoginMutation } from "../../services/api/authApi";
import { showErrorAlert } from "../../utils/alert";

const Login = () => {
  const [login, { isLoading }] = useLoginMutation();
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

  const onSubmit = async (data: LoginRequest) => {
    try {
      await login(data).unwrap();
    } catch (error) {
      showErrorAlert(error);
    }
  };

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
