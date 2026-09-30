import React from "react";
import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Dashboard() {
  return (
    <SafeAreaView style={{ gap: 5, padding: 15,display: "flex" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Dashboard</Text>
    </SafeAreaView>
  );
}