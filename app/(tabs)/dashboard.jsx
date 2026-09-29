import React from "react";
import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

export default function Dashboard() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Dashboard</Text>

      <Link href="/(tabs)/inventory" asChild>
        <Pressable
          style={{
            marginTop: 20,
            backgroundColor: "blue",
            paddingVertical: 15,
            paddingHorizontal: 40,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Go to Inventory
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}