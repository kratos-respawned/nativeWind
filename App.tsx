import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="w-full h-full grid justify-center bg-gray-900">
      <Text className="text-violet-500 text-2xl font-bold text-center">
        NativeWind + <Text className="text-white">Expo</Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
