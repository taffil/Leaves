import React from "react";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Modal,
  RefreshControl,
} from "react-native";
import Text16 from "../Text/Text16";
import Button from "../Buttons/Button";
import { AlertModalProps } from "../../types";

const ScreenModal = ({
  children,
  headerShow = true,
  title,
  visible,
  animationType = "slide",
  refershing = false,
  containerViewProps,
  headerViewProps,
  titleProps,
  buttonProps,
  headerChildren,
  onCloseCallback,
}: AlertModalProps) => {
  return (
    <Modal visible={visible} animationType={animationType}>
      <KeyboardAvoidingView behavior="padding" className="flex-1">
        {headerShow && (
          <View
            className="flex-row items-center justify-between bg-gray-50 px-5 py-2.5 pt-14"
            {...headerViewProps}
          >
            <Text16 className="text-black font-productSansBold" {...titleProps}>
              {title}
            </Text16>
            <Button type="third" onPress={onCloseCallback} {...buttonProps}>
              Close
            </Button>
            {headerChildren}
          </View>
        )}
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
          refreshControl={<RefreshControl refreshing={refershing} />}
          {...containerViewProps}
        >
          <View className="flex-1">{children}</View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default ScreenModal;
