import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: "allocations"}} />

      <Text>Allocations!</Text>
      <Link href={"/allocations/new"} >Go to new allocation</Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
