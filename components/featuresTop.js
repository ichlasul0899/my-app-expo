import {
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Feature from "./feature";
const FeaturesTop = () => {
  const onPress = () => {
    console.log("ganti rekening");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Feature name="Kirim Uang" image={require('../assets/wokeelogo.png')}></Feature>
      <Feature name="Penarikan" image={require('../assets/wokeelogo.png')}></Feature>
      <Feature name="Uang Elektronik" image={require('../assets/wokeelogo.png')}></Feature>

   

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: 'wrap',
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: -50,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: 'burlywood'
  },
  button: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  btnTitle: {
    color: "burlywood",
    fontWeight: "bold",
    fontSize: 12,
  },
  textPrimary: {
    fontSize: 20,
    fontWeight: "bold",
    color: "forestgreen",
  },
  textSecondary: {
    fontSize: 12,
    fontWeight: "normal",
    color: "white",
  },
});

export default FeaturesTop;
