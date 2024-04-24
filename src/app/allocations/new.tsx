import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const accounts = () => {
  return (
    <View>
      <Stack.Screen options={{title: "new alloactions"}} />

      <Text>accounts</Text>
    </View>
  );
};

export default accounts;

const styles = StyleSheet.create({});
