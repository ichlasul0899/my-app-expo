import {
    StyleSheet, View, Text,Image
  } from "react-native";
  const Feature = ({name, image}) => {
    const onPress = () => {
      console.log("ganti rekening");
    };
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 50, height: 50, marginBottom: 5 }}
          source={image}
        />
        <Text style={styles.title}>{name}</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
    //   backgroundColor: "burlywood",
    //   borderWidth: 1,
      minWidth: 100,
    },
    title: {
        fontSize: 12,
    fontWeight: "bold",
    color: "burlywood",
    }
  });
  
  export default Feature;
  