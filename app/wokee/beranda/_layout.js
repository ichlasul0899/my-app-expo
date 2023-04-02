import { Link, Stack, useRouter } from "expo-router";
import {TouchableWithoutFeedback , Text, View} from "react-native";
import HeaderBeranda from '../../../components/headerBeranda';
import {MaterialIcons } from '@expo/vector-icons';
import { useState } from "react";

export default function Layout() {
  const [count, setCount] = useState(0);
  const router = useRouter();
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
        headerRight: () => (
          <TouchableWithoutFeedback  onPress={()=>{
            setCount(count + 1)
            console.log("Show message")
            // router.push('/beranda/messageList')
          }}>
            <View style={{flexDirection: "row"}}>
              <Link href="/wokee/beranda/messageList">
                <MaterialIcons name="message" size={24} color="white" />
                <Text style={{fontSize: 10, color: 'green', marginTop: -10, fontWeight: 'bold', marginLeft: -5}}>{count}</Text>

              </Link>
            </View>
          </TouchableWithoutFeedback>
        ),
      }}
    >
      <Stack.Screen name="index" options={{ title: "Beranda" ,headerShown: true }}/>
      <Stack.Screen name="messageList" options={{ title: "Message" , headerShown: true , headerTitle:()=> <Text>Asu</Text>, headerRight:()=> <Text></Text>}}  />

    </Stack>
  );
}
