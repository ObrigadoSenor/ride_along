import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Input } from "../atoms/input";
import { Box } from "./Box";

interface WhereToInterface {}

export const WhereTo = ({}: WhereToInterface) => {
  const [whereToText, setWhereToText] = useState<string>("");
  return (
    <View style={[styles.container]}>
      <Input
        value={whereToText}
        onChangeText={(t) => setWhereToText(t)}
        placeholder="Where to"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
