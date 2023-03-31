import { Tabs } from "expo-router";
import { AntDesign, Entypo } from '@expo/vector-icons';

export default () => {
    return <Tabs screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: "white",
        tabBarActiveBackgroundColor: "burlywood",
        tabBarInactiveBackgroundColor: "burlywood",

        
    }}>
        <Tabs.Screen name="index" options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />
        }} />
        <Tabs.Screen name="cart" options={{ 
            headerShown: false,
            title: "Cart",
            tabBarIcon: ({ color }) => <Entypo name="shopping-cart" size={24} color={color} />  }} />
        <Tabs.Screen name="listItem" options={{ 
            headerShown: false,
            title: "Item",
            tabBarIcon: ({ color }) => <AntDesign name="heart" size={24} color={color} /> }}/>
        <Tabs.Screen name="profile" options={{ 
            headerShown: false, 
            title: "Profile",
            tabBarIcon: ({ color }) => <AntDesign name="pluscircle" size={24} color={color} /> 
        }} />
    </Tabs>
};