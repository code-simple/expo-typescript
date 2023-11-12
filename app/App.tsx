import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 bg-green-200 justify-center items-center">
      <Link href="screens/Home" className="">
        <Text className="">Go Home Bro</Text>
      </Link>
    </View>
  );
}
