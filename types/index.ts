import { ReactNode } from "react";
import {
  ModalProps,
  ScrollViewProps,
  TextProps,
  ViewProps,
} from "react-native";
import { TouchableOpacityProps } from "react-native";

interface LoginRequest {
  username: string;
  password: string;
}

interface TokenPayload {
  _id: string;
  isAdmin: boolean;
  iat: number;
  exp: number;
}

interface LeaveRequest {
  key: number;
  name: string;
  decision?: "Approved" | "Rejected" | "Pending" | "Partially Approved";
  leaveType:
    | "Annual Leave"
    | "Sick Leave"
    | "Maternity Leave"
    | "Paternity Leave"
    | "Unpaid Leave";
  period: string;
  days: string;
  requestedOn: string;
  description?: string;
  toDate: Date;
  fromDate: Date;
}

interface Authorization {
  role: string;
  add: boolean;
  approve: boolean;
  partiallyApprove: boolean;
  edit: boolean;
  reject: boolean;
}

interface ButtonProps extends TouchableOpacityProps {
  type?: "primary" | "secondary" | "third" | "remove" | "transparent";
  text?: string;
  icon?: any;
  mode?: "contained" | "outlined";
  textProps?: TextProps;
  loading?: boolean;
}

interface ScreenModalProps extends ModalProps {
  children: ReactNode;
  headerShow?: boolean;
  title?: string;
  visible: boolean;
  animationType?: "none" | "slide" | "fade";
  refershing?: boolean;
  containerViewProps?: ScrollViewProps;
  headerViewProps?: ViewProps;
  titleProps?: TextProps;
  buttonProps?: ButtonProps;
  headerChildren?: ReactNode;
  onCloseCallback?: () => void;
  onYesCallback?: () => void;
  onNoCallback?: () => void;
}

export type {
  LeaveRequest,
  Authorization,
  ButtonProps,
  ScreenModalProps,
  LoginRequest,
  TokenPayload,
};
