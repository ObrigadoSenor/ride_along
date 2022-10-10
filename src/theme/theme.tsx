import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "../state/providers/themeProvider";

export type ThemeSizeTypes = "xs" | "s" | "m" | "l" | "xl" | "xxl";

export interface ThemeSizeInterface {
  xs?: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl?: string;
}

export interface ThemeDefaultInterface {
  fonts: string[];
  fontSizes: ThemeSizeInterface;
  radius: ThemeSizeInterface;
  spacings: ThemeSizeInterface;
  sizes: ThemeSizeInterface;
  opacity: {
    disabled: number;
    default: number;
  };
}

export interface ThemeTemplateInterface {
  colors: {
    primary: string;
    secondary: string;
    secondaryAlpha: string;
    accent: string;
    accentAlpha: string;
    modal: string;
    text: {
      primary: string;
      secondary: string;
      disabled: string;
      placeholder: string;
    };
  };
}

const themeDefault: ThemeDefaultInterface = {
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    s: "12px",
    m: "14px",
    l: "16px",
    xl: "18px",
  },
  radius: {
    s: "3px",
    m: "6px",
    l: "9px",
    xl: "12px",
  },
  spacings: {
    xs: "5px",
    s: "10px",
    m: "20px",
    l: "30px",
    xl: "40px",
    xxl: "100px",
  },
  sizes: {
    s: "30px",
    m: "40px",
    l: "50px",
    xl: "60px",
  },
  opacity: {
    disabled: 0.4,
    default: 1,
  },
};

interface ThemeInterface {
  children: any;
}

export const Theme = ({ children }: ThemeInterface) => {
  const { pickedTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={{ ...themeDefault, ...pickedTheme.theme }}>
      {children}
    </ThemeProvider>
  );
};
