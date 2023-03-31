import { Text, View, StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';

export default function Home() {
  return <View style={styles.container} >
    <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
  </View>;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
});

