import { View, Text, StyleSheet } from "react-native";
const MessageList = () => {
  const onPress = () => {
    console.log("ganti rekening");
  };
  return (
    <View style={styles.container}>
      <Text>message</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: 1,
  alignItem: "center",
});

export default MessageList;
