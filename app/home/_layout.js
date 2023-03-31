import { Tabs } from "expo-router";
import { AntDesign } from '@expo/vector-icons';

export default () => {
    return <Tabs screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: "red"
    }}>
        <Tabs.Screen name="index" options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ color }) => <AntDesign name="pluscircle" size={24} color={color} />
        }} />
        <Tabs.Screen name="cart" options={{ headerShown: false }} />
        <Tabs.Screen name="listItem" options={{ headerShown: false }} />
        <Tabs.Screen name="profile" options={{ 
            headerShown: false, 
            title: "Profile",
            tabBarIcon: ({ color }) => <AntDesign name="pluscircle" size={24} color={color} /> 
        }} />
    </Tabs>
};