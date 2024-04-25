import React, { useState } from "react";
import { Dimensions, Modal, TouchableOpacity, View } from "react-native";
import { AlertModalProps } from "../../types";
import Button from "../Buttons/Button";

const AlertModal = ({
  visible,
  animationType = "slide",
  children,
  title,
  onCloseCallback,
  onYesCallback,
  onNoCallback,
  ...props
}: AlertModalProps) => {
  const windowHeight = Dimensions.get("window").height;
  const [modalHeight, setModalHeight] = useState(0);

  const onLayout = (event: any) => {
    const { height } = event.nativeEvent.layout;
    setModalHeight(height);
  };

  return (
    <Modal
      visible={visible}
      animationType={animationType}
      transparent={true}
      {...props}
    >
      <TouchableOpacity
        className="flex-1 relative items-center"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.35)",
        }}
        onPress={onCloseCallback}
      >
        <View
          className="absolute bg-white dark:bg-zinc-800 rounded-lg max-w-[92.5%]"
          onLayout={onLayout}
          style={{
            top: windowHeight / 2 - modalHeight / 2,
          }}
        >
          <View className="p-5">{children}</View>
          <View className="flex-1 flex-row">
            <View className="flex-1 border-r border-t border-gray-200 dark:border-zinc-600">
              <Button type="transparent" onPress={onYesCallback}>
                Yes
              </Button>
            </View>
            <View className="flex-1 border-t border-gray-200 dark:border-zinc-600">
              <Button type="transparent" onPress={onNoCallback}>
                No
              </Button>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default AlertModal;
