import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
const HeaderBeranda = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
          style={{ width: 50, height: 50 }}
          source={require("../assets/wokeelogo.png")}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Halo, Ichlasul Amal</Text>
          <Text style={styles.subTitle}>Masuk Terakhir : 31 MAR 23 20.01</Text>
        </View>
    </SafeAreaView>
  );
};

{/* <SafeAreaView style={styles.container}>
      <Image
          style={{ width: 50, height: 50 }}
          source={require("../assets/wokeelogo.png")}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Halo, Ichlasul Amal</Text>
          <Text style={styles.subTitle}>Masuk Terakhir : 31 MAR 23 20.01</Text>
        </View>
    </SafeAreaView> */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
  headerLeftContainer:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textContainer: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  subTitle: {
    fontSize: 12,
    fontWeight: "normal",
    color: "white",
  },
});

export default HeaderBeranda;
