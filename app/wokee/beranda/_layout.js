import { Stack } from "expo-router";
import { Image, View, Text } from "react-native";
import HeaderBeranda from '../../../components/headerBeranda';

// function LogoTitle() {
//   return (
//     <View>
//       <Image
//         style={{ width: 50, height: 50 }}
//         source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
//       />
//       <Text>ASI</Text>

//     </View>
//   );
// }
export default function Layout() {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerStyle: {
          backgroundColor: "burlywood",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitle:  (props) => <HeaderBeranda {...props} />,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Beranda" }} />
    </Stack>
  );
}
