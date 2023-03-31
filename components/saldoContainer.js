import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
const SaldoContainer = () => {
  const onPress = () => {
    console.log("ganti rekening");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.textSecondary}>890000087989</Text>
        <Text style={styles.textPrimary}>Rp 100.000,00</Text>
        <Text style={styles.textSecondary}>Saldo Aktif Rp 0,00</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.btnTitle}>Ganti Rekening</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "burlywood",
    height: 150,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
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

export default SaldoContainer;

// container: {
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: 'flex-start',
//     padding: 10,
//     height: 150,
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20
//   },
// container: {
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: 'flex-start',
//     padding: 10,
//     height: 150,
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20
//   },
//   headerLeftContainer:{
//     flex:1,
//     flexDirection: 'row',
//     alignItems: 'center'
//   },
//   textContainer: {
//     paddingHorizontal: 10,
//   },
//   title: {
//     fontSize: 14,
//     fontWeight: "bold",
//     color: "white",
//   },
//   subTitle: {
//     fontSize: 12,
//     fontWeight: "normal",
//     color: "white",
//   },
//   image:{
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20
//   }
