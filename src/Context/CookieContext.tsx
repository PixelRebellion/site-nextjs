"use client";
import { FC, ReactNode, createContext, useEffect, useState } from "react";
import { hasCookie, setCookie } from "cookies-next";

type CookieContextType = {
  optIn: boolean;
  cookieOptInOption: (value: boolean) => void;
  showContent: boolean;
  setShowContent?: (value: boolean) => void;
};

export const CookieContext = createContext<CookieContextType>({
  optIn: false,
  cookieOptInOption: () => {},
  showContent: true,
  setShowContent: () => {},
});

export const CookieProvider: FC<{ children: ReactNode }> = ({ children }) => {
  let [optIn, setOptIn] = useState(false);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    setShowContent(hasCookie("accept_PR_cookie") ? true : false);
  }, []);

  const cookieOptInOption = (value: boolean) => {
    setOptIn(value);
    setCookie("accept_PR_cookie", value, {});
  };

  return (
    <CookieContext.Provider
      value={{ optIn, cookieOptInOption, showContent, setShowContent }}
    >
      {children}
    </CookieContext.Provider>
  );
};
