import {
  KeyboardAvoidingView,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React, { useState } from "react";
import { Avatar, Icon } from "react-native-paper";
import Input from "../../components/Inputs/Input";
import Text14 from "../../components/Text/Text14";
import Button from "../../components/Buttons/Button";
import { Controller, useForm } from "react-hook-form";
import TextError from "../../components/Text/TextError";
import ScreenModal from "../../components/Modals/ScreenModal";
import ChangePasswordModal from "./ChangePasswordModal";
import { MediaTypeOptions, launchImageLibraryAsync } from "expo-image-picker";
import AlertModal from "../../components/Modals/AlertModal";
import Text16 from "../../components/Text/Text16";

const Profile = () => {
  const [changePasswordModal, setChangePasswordModal] =
    useState<boolean>(false);
  const [image, setImage] = useState<string | null>(null);
  const [removeImageModal, setRemoveImageModal] = useState<boolean>(false);

  const pickImage = async () => {
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

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
            <View className="items-center mb-5 relaative">
              {image ? (
                <Avatar.Image source={{ uri: image }} size={128} />
              ) : (
                <Avatar.Text label="JD" size={128} />
              )}
              <View className="flex-row">
                <Button
                  text="Edit profile picture"
                  type="transparent"
                  onPress={pickImage}
                />
                {image && (
                  <Button
                    text="Remove profile picture"
                    type="remove"
                    mode="outlined"
                    className="border-0"
                    onPress={() => setRemoveImageModal(true)}
                  />
                )}
              </View>
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
            <View className="mt-2 flex-row justify-end">
              <Button
                text="Change Password"
                type="transparent"
                onPress={() => setChangePasswordModal(true)}
              />
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
        <ScreenModal
          visible={changePasswordModal}
          title="Change Password"
          onCloseCallback={() => setChangePasswordModal(false)}
        >
          <ChangePasswordModal />
        </ScreenModal>
        <AlertModal
          visible={removeImageModal}
          onYesCallback={() => {
            setImage(null);
            setRemoveImageModal(false);
          }}
          onNoCallback={() => setRemoveImageModal(false)}
          onCloseCallback={() => setRemoveImageModal(false)}
        >
          <Text16 className="font-productSansBold text-center">
            Are you sure you want to remove profile picture?
          </Text16>
        </AlertModal>
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
