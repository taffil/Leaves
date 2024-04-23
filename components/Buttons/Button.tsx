import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import Text14 from "../Text/Text14";

interface ButtonProps extends TouchableOpacityProps {
  type: "primary" | "secondary" | "third" | "remove" | "transparent";
  text?: string;
  icon?: any;
  mode?: "contained" | "outlined";
}

const Button = ({
  text,
  type,
  icon,
  mode = "contained",
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      className={`p-3 rounded-xl items-center flex-row justify-center
    ${type === "primary" && mode === "contained" && "bg-green-400"}
    ${type === "secondary" && mode === "contained" && "bg-amber-400"}
    ${type === "third" && mode === "contained" && "bg-gray-200"}
    ${type === "remove" && mode === "contained" && "bg-rose-500"}
    ${type === "transparent" && mode === "contained" && "bg-transparent"}
    ${type === "primary" && mode === "outlined" && "border border-green-400"}
    ${type === "secondary" && mode === "outlined" && "border border-amber-400"}
    ${type === "third" && mode === "outlined" && "border border-gray-200"}
    ${type === "remove" && mode === "outlined" && "border border-rose-500"}
    ${
      type === "transparent" &&
      mode === "outlined" &&
      "border border-transparent"
    }
    `}
      {...props}
    >
      {icon ? icon : null}
      {text && (
        <Text14
          className={`font-productSansMedium text-black  ${
            type === "primary" && mode === "outlined" && "text-green-400"
          }
    ${type === "secondary" && mode === "outlined" && "text-amber-400"}
    ${type === "third" && mode === "outlined" && "text-gray-200"}
    ${type === "remove" && mode === "outlined" && "text-rose-500"}
    ${icon && "ml-1"}
    `}
        >
          {text}
        </Text14>
      )}
    </TouchableOpacity>
  );
};

export default Button;
