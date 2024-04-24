import { Slot, Stack, Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{href: null}} />
      <Tabs.Screen
        name="allocations"
        options={{
          title: "allocations",
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name={"account-tree"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="accounts"
        options={{
          title: "accounts",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name={"account-balance-wallet"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
