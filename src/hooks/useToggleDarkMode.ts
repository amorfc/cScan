import { useColorMode } from "native-base";

export const useToggleDarkMode = () => {
  const { toggleColorMode } = useColorMode();

  return {
    toggleColorMode,
  };
};
