import React from "react";
import { View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import Text14 from "../../components/Text/Text14";
import Input from "../../components/Inputs/Input";
import TextError from "../../components/Text/TextError";
import Button from "../../components/Buttons/Button";

const ChangePasswordModal = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <View className="flex-1 flex-col justify-between mb-5 p-5">
      <View className="flex-col gap-y-3">
        <View>
          <Text14>New Password</Text14>
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
          <Text14>Confirm New Password</Text14>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            name="confirmPassword"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Confirm Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.confirmPassword}
              />
            )}
          />
          {errors.confirmPassword && (
            <TextError>Confirm password is required.</TextError>
          )}
        </View>
      </View>
      <Button type="primary" mode="contained" onPress={handleSubmit(onSubmit)}>
        Save
      </Button>
    </View>
  );
};

export default ChangePasswordModal;
