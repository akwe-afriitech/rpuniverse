import { Tabs } from "expo-router";

const TabLayout = () =>  (
    <Tabs screenOptions={{ headerShown: false }}> 
        <Tabs.Screen name="dashboard" options={{ title: "Home" }} />
        <Tabs.Screen name="inventory" options={{ title: "Inventory" }} />
        <Tabs.Screen name="more" options={{ title: "More" }} />
        <Tabs.Screen name="settings" options={{ title: "Settings" }} />
    </Tabs>
    );

export default TabLayout;