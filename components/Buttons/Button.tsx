import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import Text16 from "../Text/Text16";
import Text14 from "../Text/Text14";

interface ButtonProps extends TouchableOpacityProps {
  type: "primary" | "secondary" | "third" | "remove" | "transparent";
  text: string;
}

const Button = ({ text, type, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity
      className={`p-3 rounded-xl items-center
    ${type === "primary" && "bg-green-400"}
    ${type === "secondary" && "bg-amber-400"}
    ${type === "third" && "bg-gray-200"}
    ${type === "remove" && "bg-rose-500"}
    ${type === "transparent" && "bg-transparent"}
    `}
      {...props}
    >
      <Text14 className="font-productSansMedium text-black">{text}</Text14>
    </TouchableOpacity>
  );
};

export default Button;
