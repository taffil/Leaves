import {
  KeyboardAvoidingView,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React, { useState } from "react";
import { Avatar } from "react-native-paper";
import Input from "../../components/Inputs/Input";
import Text14 from "../../components/Text/Text14";
import Button from "../../components/Buttons/Button";
import { Controller, useForm } from "react-hook-form";
import TextError from "../../components/Text/TextError";
import ScreenModal from "../../components/Modals/ScreenModal";
import ChangePasswordModal from "./ChangePasswordModal";
import { launchImageLibraryAsync } from "expo-image-picker";
import { useSelector } from "react-redux";
import { RootState } from "../../services/store";
import { showYesNoAlert } from "../../utils/alert";

const Profile = () => {
  const darkMode = useSelector((state: RootState) => state.settings.darkMode);
  const user = useSelector((state: RootState) => state.auth);

  const [changePasswordModal, setChangePasswordModal] =
    useState<boolean>(false);
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await launchImageLibraryAsync({
      mediaTypes: ["images"],
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
          <RefreshControl
            refreshing={false}
            tintColor={darkMode ? "#f9fafb" : "#0F172A"}
          />
        }
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        className="dark:bg-zinc-800"
      >
        <View className="p-5 flex-col justify-between bg-white dark:bg-zinc-800 rounded-lg mt-5 flex-1 border border-gray-200 dark:border-zinc-600">
          <View>
            <View className="items-center mb-5 relaative">
              {image ? (
                <Avatar.Image source={{ uri: image }} size={128} />
              ) : (
                <Avatar.Text
                  label={
                    (user?.firstName ?? "").charAt(0) +
                    (user?.lastName ?? "").charAt(0)
                  }
                  size={128}
                />
              )}
              <View className="flex-row">
                <Button type="transparent" onPress={pickImage}>
                  Edit profile picture
                </Button>
                {image && (
                  <Button
                    type="remove"
                    mode="outlined"
                    className="border-0"
                    onPress={() => {
                      showYesNoAlert({
                        title: "Are you sure?",
                        message: "Do you want to remove profile picture?",
                        onAcceptPress: () => {
                          setImage(null);
                          return null;
                        },
                        style: "destructive",
                      });
                    }}
                  >
                    Remove profile picture
                  </Button>
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
                      textContentType="givenName"
                    />
                  )}
                />
                {errors.firstName && (
                  <TextError>First Name is required</TextError>
                )}
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
                      textContentType="familyName"
                    />
                  )}
                />
                {errors.lastName && (
                  <TextError>Last Name is required.</TextError>
                )}
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
                      keyboardType="email-address"
                    />
                  )}
                />
                {errors.email && <TextError>Email is required.</TextError>}
              </View>
            </View>
          </View>
          <View className="mt-5 flex-col gap-y-3">
            <Button
              type="transparent"
              onPress={() => setChangePasswordModal(true)}
            >
              Change Password
            </Button>
            <Button
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
