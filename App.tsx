import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  return (
    <View className="flex pb-10">
      <StatusBar hidden />
      <View className="flex flex-row items-center bg-sky-500 py-3 gap-5 px-5 shadow-lg shadow-black">
        <Image
          source={require("./assets/icon.png")}
          className="h-16 w-16 rounded-full "
        />
        <View className="flex-1 ">
          <Text className="text-xl font-medium text-white">Group Chat</Text>
          <Text className="text-sm text-sky-900">5 members</Text>
        </View>
      </View>

      <FlatList
        data={Array(10).fill(0)}
        renderItem={({ item, index }) => <Chat item={index} />}
        keyExtractor={(_, index) => index.toString()}
        scrollEnabled
        ListFooterComponent={() => <View className="h-20" />}
      />
    </View>
  );
}

const Chat = ({ item }: { item: number }) => {
  return (
    <View className="flex flex-row items-center  gap-5 py-2 border-b border-blue-900">
      <Image
        source={require("./assets/icon.png")}
        className="h-16 w-16 rounded-full "
      />
      <View className="flex-1 ">
        <Text className="text-xl font-medium text-blue-900">XYZ</Text>
        <Text className="text-sm text-sky-900">{item} members</Text>
      </View>
    </View>
  );
};
