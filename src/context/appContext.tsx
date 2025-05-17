import { createContext, useState, type ReactNode } from "react";

export type ThemeType = "light" | "dark" | "neutral";

interface AppContextType {
  currentTheme: ThemeType;
  setCurrentTheme: (theme: ThemeType) => void;
}

const defaultContextValue: AppContextType = {
  currentTheme: "light",
  setCurrentTheme: () => {},
};

export const ApplicationContext =
  createContext<AppContextType>(defaultContextValue);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>("light");

  return (
    <ApplicationContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </ApplicationContext.Provider>
  );
};
