import React from "react";
import { Tabs } from "expo-router";
import { Stack } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0F0f0f",
        },
        headerTintColor: "#fff",
        hederTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen name="index" />
    </Tabs>
  );
};

export default TabsLayout;
