import { Tabs } from "expo-router";
import { AntDesign, Entypo, MaterialIcons  } from '@expo/vector-icons';

export default () => {
    return <Tabs style={{border: "1px solid red"}} screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "white",
        tabBarActiveBackgroundColor: "burlywood",
        tabBarInactiveBackgroundColor: "burlywood",
    }}>
        <Tabs.Screen name="beranda" options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />
        }} />
        <Tabs.Screen name="penerima" options={{
            headerShown: false,
            title: "Penerima",
            tabBarIcon: ({ color }) => <AntDesign name="plus" size={24} color={color} />
        }} />
         <Tabs.Screen name="transaksi" options={{
            headerShown: false,
            title: "Transaksi",
            tabBarIcon: ({ color }) => <AntDesign name="creditcard" size={24} color={color} />
        }} />
         <Tabs.Screen name="profile" options={{
            headerShown: true,
            title: "Profile",
            tabBarIcon: ({ color }) => <MaterialIcons name="person" size={24} color={color} />
        }} />
    </Tabs>
};