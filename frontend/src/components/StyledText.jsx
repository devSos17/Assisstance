import React from "react";
import theme from "../theme.js";
import { StyleSheet, Text } from "react-native";

const StyledText = ({ children }) => {
  return (
    <Text
      style={{
        color: theme.color.primary,
      }}
    >
      {children}
    </Text>
  );
};

export default StyledText;
