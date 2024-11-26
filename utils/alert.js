import { Alert } from "react-native";

export const showAlert = ({
  title,
  message,
  onPress = () => null,
  cancelable = true,
  style = "default",
}) => {
  Alert.alert(title, message, [{ text: "OK", onPress, style }], {
    cancelable,
  });
};

export const showErrorAlert = (error) => {
  Alert.alert(
    error?.title || "Error",
    error?.message ||
      error?.data?.message ||
      error?.error ||
      "Something went wrong"
  );
};

export const showYesNoAlert = ({
  title = "Are you sure?",
  message = "You cannot undo this action.",
  acceptText = "Yes",
  rejectText = "No",
  onAcceptPress = () => null,
  onRejectPress = () => null,
  cancelable = true,
  style = "default",
}) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: acceptText,
        onPress: onAcceptPress,
        style,
      },
      {
        text: rejectText,
        onPress: onRejectPress,
      },
    ],
    { cancelable }
  );
};
