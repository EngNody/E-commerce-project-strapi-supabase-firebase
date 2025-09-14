import React from "react";
import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          text: {
            primary: "#2B3445",

          },
          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[300],
          },
          mycolor:{
            main:"#f6f9fc"
          },
          newcolor:{
            main:grey[300],
            text:grey[300]
          },
          bg:{
            main:"#f6f6f6"
          }

        }
      : {
          // palette values for dark mode
          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[800],
          },
          text: {
            primary: "#fff",
          },
            mycolor:{
            main:"#252p32"
          },
            newcolor:{
            main:"#555b6e",
            text:"#555b6e"
          },
          bg:{
            main:"#1d2021f6"
          }
        }),
  },
});

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};