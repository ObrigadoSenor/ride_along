import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import styled from "styled-components/native";

import { Icon, IconNames } from "./atoms/icon";
import { Map } from "./organisms/Map";
import { Settings } from "./organisms/Settings";
import { ThemeContext } from "./state/providers/themeProvider";

const NavContainer = styled(NavigationContainer)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

export interface NavigationInterface extends Partial<NativeStackHeaderProps> {}

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
};

export const Base = () => {
  const Tab = createBottomTabNavigator();
  const { pickedTheme } = useContext(ThemeContext);
  return (
    <>
      <NavContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color = "#000" }) => {
              let iconName: IconNames = "map";
              if (route.name === "Map") {
                iconName = focused ? "map" : "map";
              } else if (route.name === "Profile") {
                iconName = focused ? "person" : "person";
              } else if (route.name === "Settings") {
                iconName = focused ? "settings" : "settings";
              }
              return <Icon name={iconName} size="m" disabled={focused} />;
            },
            tabBarActiveTintColor: pickedTheme.theme.colors.text.disabled,
            tabBarInactiveTintColor: pickedTheme.theme.colors.text.primary,
            tabBarStyle: {
              paddingVertical: 10,
              backgroundColor: pickedTheme.theme.colors.primary,
            },
            tabBarLabelStyle: { paddingTop: 3 },
            headerStyle: {
              backgroundColor: pickedTheme.theme.colors.primary,
            },
            headerTitleStyle: {
              color: pickedTheme.theme.colors.text.primary,
            },
          })}
        >
          <Tab.Screen
            name="Map"
            component={Map}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
        <StatusBar style="auto" />
      </NavContainer>
    </>
  );
};
