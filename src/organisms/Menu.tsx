import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useContext, useState } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { Button, ButtonInterface } from "../atoms/button";
import { RootStackParamList } from "../base";
import { Box } from "../molecules/Box";
import { DialogWindowContext } from "../state/providers/dialogWindowProvider";

const FloatingMenuBtn = styled(Button)`
  position: absolute;
  align-items: center;
  justify-content: center;
  bottom: ${({ theme }) => theme.spacings.xl};
  left: ${({ theme }) => theme.spacings.m};
`;

const MenuContainer = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${() => Dimensions.get("window").width * 0.7};
  padding: ${({ theme }) =>
    `${theme.spacings.xxl} ${theme.spacings.m} ${theme.spacings.xxl} ${theme.spacings.m}`};
`;

const MenuBtns = styled(Button)`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacings.m};
`;

interface MenuItemInterface extends ButtonInterface {}

const menuItems = (navigation: NavigationType) => {
  const items: MenuItemInterface[] = [
    {
      icons: {
        opened: "person",
        closed: "person",
      },
      onPress: () => navigation.navigate("Profile"),
      title: "Profile",
    },
    {
      icons: {
        opened: "settings",
        closed: "settings",
      },
      onPress: () => navigation.navigate("Home"),
      title: "Settings",
    },
  ];

  return items;
};

type HomeScreenType = NativeStackNavigationProp<RootStackParamList, "Home">;
type ProfileScreenType = NativeStackNavigationProp<
  RootStackParamList,
  "Profile"
>;

type NavigationType = HomeScreenType | ProfileScreenType;

export const Menu = () => {
  const navigation = useNavigation<NavigationType>();
  const { openDialogWindow, setOpenDialogWindow } =
    useContext(DialogWindowContext);

  const menuOpen = openDialogWindow === "menu";

  const renderMenuItems = () => (
    <>
      {menuItems(navigation).map((menuItem, index) => (
        <MenuBtns key={menuItem.title} {...menuItem} />
      ))}
    </>
  );

  const menu = <MenuContainer>{renderMenuItems()}</MenuContainer>;

  return (
    <>
      {menuOpen ? menu : null}
      <FloatingMenuBtn
        onPress={() => setOpenDialogWindow(menuOpen ? "none" : "menu")}
        icons={{
          opened: "close-circle-outline",
          closed: "menu-outline",
        }}
        open={menuOpen}
      />
    </>
  );
};
