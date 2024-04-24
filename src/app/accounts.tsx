import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AccountListItem from "../components/AccountListItem";
import AccountList from "../components/AccountsList";

const accounts = () => {
  return (
    <View style={{ flex: 1, marginTop: 10}}>
      <View style={styles.heading}>
        <Text style={styles.headingName}>Name</Text>
        <View style={styles.subHeading}>
          <Text style={{fontSize: 16, textTransform: 'uppercase', fontWeight: '400'}}>cap</Text>
          <Text style={{fontSize: 16, textTransform: 'uppercase', fontWeight: '400'}}>tap</Text>
        </View>
      </View>

      <AccountList />
    
    </View>
  );
};

export default accounts;

const styles = StyleSheet.create({
  heading: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingBottom: 5,
  },
  headingName: {
    flex: 1,
    fontSize: 18,
    fontWeight: "400",
  },
  subHeading: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
