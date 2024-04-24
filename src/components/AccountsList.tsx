import AccountListItem from "./AccountListItem";
import { Button, FlatList } from "react-native";

export default function AccountList() {
  return (
    <>
      <AccountListItem name={"Profit"} capPer={10} tapPer={5} />
      <AccountListItem name={"Owner comp"} capPer={10} tapPer={5} />
      <AccountListItem name={"Tax"} capPer={10} tapPer={5} />

      {/* <FlatList
        keyExtractor={(index) => index.toString()}
        data={[1, 2, 3]}
        renderItem={() => (
            <AccountListItem name={"Equity"} capPer={10} tapPer={5} />
        )}
      /> */}
    </>
  );
}
