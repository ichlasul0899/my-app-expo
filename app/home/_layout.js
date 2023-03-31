import { Tabs } from "expo-router";

export default () => {
    return <Tabs>
        <Tabs.Screen name="index" options={{headerShown: false}} />
        <Tabs.Screen name="cart" options={{headerShown: false}} />
        <Tabs.Screen name="listItem" options={{headerShown: false}} />
        <Tabs.Screen name="settings" options={{headerShown: false}} />

    </Tabs>
};