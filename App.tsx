import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function App() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <View className="w-full h-full grid justify-center bg-gray-900">
      <StatusBar style="auto" />
      <Text className="text-violet-500 text-4xl  font-bold text-center ">
        Kratos
      </Text>
      <TextInput
        className="w-9/12 h-10 px-4 bg-gray-800 text-white rounded-md mx-auto my-7"
        placeholder="Username"
        value={userName}
        onChangeText={(text) => setUserName(text)}
        placeholderTextColor={"#9CA3AF"}
      />
      <TextInput
        className="w-9/12 h-10 px-4 bg-gray-800 text-white rounded-md mx-auto "
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        selectTextOnFocus={true}
        placeholderTextColor={"#9CA3AF"}
      />
      <View className="mx-auto mt-5 w-1/2">
        <Button
          color={"#8b5cf6"}
          title="Login"
          onPress={() => {
            if (userName === "" && password === "") {
              alert("please fill all fields");
              return;
            }
            if (userName === "admin" && password === "admin") {
              alert("Login Success");
              return;
            }
          }}
        />
      </View>
    </View>
  );
}
