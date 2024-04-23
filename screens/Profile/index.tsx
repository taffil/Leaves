import {
  KeyboardAvoidingView,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import { Avatar, Icon } from "react-native-paper";
import Input from "../../components/Inputs/Input";
import Text14 from "../../components/Text/Text14";
import Button from "../../components/Buttons/Button";
import { Controller, useForm } from "react-hook-form";
import TextError from "../../components/Text/TextError";

const Profile = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <KeyboardAvoidingView className="flex-1" behavior="padding">
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={false} tintColor={"#0F172A"} />
        }
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View className="p-5 flex-col justify-between bg-white rounded mt-5 flex-1">
          <View>
            <View className="items-center mb-8 relaative">
              {!require("../../assets/icon.png") ? (
                <Avatar.Image
                  source={require("../../assets/icon.png")}
                  size={128}
                />
              ) : (
                <Avatar.Text label="JD" size={128} />
              )}
              <Button
                type="secondary"
                mode="contained"
                className="absolute bottom-[-5px] right-24 rounded-full border-white border-2 p-2.5"
                icon={<Icon source="camera" size={20} color="#fff" />}
              />
            </View>
            <View className="flex-col gap-y-3">
              <View>
                <Text14>First Name</Text14>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  name="firstName"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      placeholder="First Name"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      error={errors.firstName}
                    />
                  )}
                />
                {errors.firstName && <TextError>This is required.</TextError>}
              </View>
              <View>
                <Text14>Last Name</Text14>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  name="lastName"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      placeholder="Last Name"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      error={errors.lastName}
                    />
                  )}
                />
                {errors.lastName && <TextError>This is required.</TextError>}
              </View>
              <View>
                <Text14>Email</Text14>
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
                {errors.email && <TextError>This is required.</TextError>}
              </View>
            </View>
            <View className="mt-5 flex-row justify-end">
              <Button text="Change Password" type="transparent" />
            </View>
          </View>
          <View className="mt-5">
            <Button
              text="Save"
              type="primary"
              mode="contained"
              onPress={handleSubmit(onSubmit)}
            >
              Save
            </Button>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
});
