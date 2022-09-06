import { Platform } from "react-native";
import uuid from "react-native-uuid";

export const isIOS = () => Platform.OS === "ios";
export const getUuid = (): string => uuid.v4().toString();
