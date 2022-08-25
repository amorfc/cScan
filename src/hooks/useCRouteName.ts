import { useEffect, useState } from "react";
import { isNavigationReady, navigationRef } from "../navigation/navUtils";
import { NavListenerEvent } from "../navigation/types";

const getCurrentRouteName = () =>
  isNavigationReady() ? navigationRef?.getCurrentRoute()?.name : undefined;

export const useCRouteName = () => {
  const [currentRouteName, setCurrentRouteName] = useState<string | undefined>(
    getCurrentRouteName(),
  );

  const navStateChangeListener = () => {
    const routeName = getCurrentRouteName();
    setCurrentRouteName(routeName);
  };

  useEffect(() => {
    if (isNavigationReady()) {
      navigationRef.addListener(NavListenerEvent.STATE, navStateChangeListener);
    }

    return () => {
      if (isNavigationReady()) {
        navigationRef?.removeListener(NavListenerEvent.STATE, navStateChangeListener);
      }
    };
  }, []);

  return {
    routeName: currentRouteName,
  };
};
