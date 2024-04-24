import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import AccountListItem from "../components/AccountListItem";
import AccountList from "../components/AccountsList";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";

const accounts = () => {
  const [name, setName] = useState("");
  const [cap, setCap] = useState("");
  const [tap, setTap] = useState("");

  const createAccount = () => {
    alert(name + " " + cap + " " + tap);
  };

  return (
    <View style={{ flex: 1, marginTop: 10 }}>
      <View style={styles.heading}>
        <Text style={styles.headingName}>Name</Text>
        <View style={styles.subHeading}>
          <Text
            style={{
              fontSize: 16,
              textTransform: "uppercase",
              fontWeight: "400",
            }}
          >
            cap
          </Text>
          <Text
            style={{
              fontSize: 16,
              textTransform: "uppercase",
              fontWeight: "400",
            }}
          >
            tap
          </Text>
        </View>
      </View>

      <AccountList />

      <View style={[styles.inputField]}>
        <TextInput placeholder="Name" style={{ fontSize: 15 }} value={name} onChangeText={setName} />
        <TextInput placeholder="CAP%" value={cap} onChangeText={setCap} />
        <TextInput placeholder="TAP%" value={tap} onChangeText={setTap} />
        <TouchableOpacity>
          <Entypo name="check" size={20} color="green" />
        </TouchableOpacity>
      </View>

      <Button title={"Add account"} onPress={createAccount} />
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
  inputField: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 5,
    marginBottom: 5,
    justifyContent: "space-between",
    backgroundColor: "white",
    elevation: 5,
    borderRadius: 10,
    alignItems: "center",
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
