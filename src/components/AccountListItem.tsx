import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AccountListItem = (props) => {
  const { name, capPer, tapPer } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{name}</Text>
      <View style={styles.barDivider}>
        <View>
          <Text style={styles.subHeading}>{capPer}%</Text>
          <Text style={styles.subHeadingText}>cap</Text>
        </View>
        <View>
          <Text style={styles.subHeading}>{tapPer}%</Text>
          <Text style={styles.subHeadingText}>tap</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    borderWidth: 1,
    margin: 5,
    borderRadius: 5,
    borderColor: "lightgrey",
    alignItems: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    width: "50%",
  },
  barDivider: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-around",
  },
  subHeading: {
    fontSize: 15,
    fontWeight: "400",
  },
  subHeadingText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
export default AccountListItem;
