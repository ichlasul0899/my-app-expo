import {
  StyleSheet,
  SafeAreaView,
  Text,
  FlatList,
  View,
  ImageBackground,
} from "react-native";

const Item = ({ title }) => (
  <ImageBackground
    source={require("../assets/saldobg.jpg")}
    style={styles.image}
  >
    <View style={styles.item}>
      {/* <Text style={styles.titleItem}>{title}</Text> */}
    </View>
  </ImageBackground>
);

const InfoSilder = () => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
    {
      id: "bd7acbeas-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68asfc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694sa0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Informasi dan Promosi</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
        pagingEnabled
        snapToAlignment="center"
        style={{marginLeft: 20}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    marginVertical: 20,

    height: 200,
    // borderWidth: 2,
    borderColor: "burlywood",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
    marginHorizontal: 20
  },
  item: {
    flex: 1,
    // backgroundColor: "burlywood",
    minWidth: 300,
    padding: 10,
    // justifyContent: 'center',
    alignItems: 'center'
  },
  titleItem: {
    fontSize: 32,
  },
  image: {
    // borderWidth:1,
    borderRadius: 20,
    overflow: 'hidden',
    marginRight: 20,
  }
});

export default InfoSilder;
