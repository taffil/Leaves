import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import Text16 from "../../components/Text/Text16";
import { Controller, useForm } from "react-hook-form";
import Input from "../../components/Inputs/Input";
import TextError from "../../components/Text/TextError";
import Button from "../../components/Buttons/Button";
import { useDispatch } from "react-redux";
import { setUser } from "../../services/slices/authSlice";

const Login = () => {
  const dispatch = useDispatch();

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

  const onSubmit = (data: any) => {
    dispatch(
      setUser({
        name: "Tafil Osmani",
        email: data.email,
        role: "admin",
      })
    );
  };

  return (
    <KeyboardAvoidingView className="flex-1" behavior="padding">
      <ScrollView
        className="bg-white dark:bg-zinc-800 p-5 flex-col gap-y-5"
        keyboardShouldPersistTaps="handled"
        scrollEnabled={false}
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
                keyboardType="email-address"
                textContentType="emailAddress"
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
                textContentType="password"
                secureTextEntry={true}
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

export default Login;
