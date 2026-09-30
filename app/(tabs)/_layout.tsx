import { Tabs } from "expo-router";
import { tabs } from "../../contants/data";
import { View } from "react-native";
import { Image } from "expo-image";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TabLayout = () => {
    const insets = useSafeAreaInsets();
    type TabIconProps = { focused: boolean; icon: any } ;
  const TabIcon = ({ focused, icon }: TabIconProps) => {
    return (
      <View>
        <View
          style={{
            width: 24,
            height: 24,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={icon}
            style={{ width: 24, height: 24 }}
            contentFit="contain"
            tintColor={focused ? "blue" : "#A0A0A0"}
          />
        </View>
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          left: 16,
          right: 16,
          bottom: Math.max(insets.bottom, 12) + 4,
          height: 60,
          borderRadius: 30,
          elevation: 5,
          borderTopWidth: 0,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          backgroundColor: "#fff",
  
        },
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => TabIcon({ focused, icon: tab.icon }),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabLayout;
