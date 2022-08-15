import { useColorMode } from "native-base";

const useToggleDarkMode = () => {
  const { toggleColorMode } = useColorMode();

  return {
    toggleColorMode,
  };
};
