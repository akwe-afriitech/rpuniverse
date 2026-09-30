import React from "react";
import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

export default function Onboarding() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 20 }}>
      <Text style={{ fontSize: 32, fontWeight: "bold", color: "black" }}>
        Welcome All
      </Text>
      <Text style={{ fontSize: 16, color: "gray" }}>
        Click next to go to your dashboard
      </Text>

      <Link href="/(tabs)/dashboard" asChild>
        <Pressable
          style={{
            marginTop: 20,
            backgroundColor: "blue",
            paddingVertical: 15,
            paddingHorizontal: 40,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Next</Text>
        </Pressable>
      </Link>
      {/* <Link href="/(auth)/sign-in" asChild>
        <Pressable>
          <Text style={{ color: "blue", fontWeight: "bold" }}>Sign In</Text>
        </Pressable>
      </Link>
      <Link href="/(auth)/signup" asChild>
        <Pressable>
          <Text style={{ color: "blue", fontWeight: "bold" }}>Sign Up</Text>
        </Pressable>
      </Link> */}
    </View>
  );
}