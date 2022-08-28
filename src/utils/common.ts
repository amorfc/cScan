import uuid from "react-native-uuid";

export const getUuid = (): string => uuid.v4().toString();
