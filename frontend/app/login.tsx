import { useState } from "react";
import { ArrowLeft } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import {
  Text,
  Adapt,
  Fieldset,
  Label,
  Select,
  Sheet,
  useIsomorphicLayoutEffect,
  Input,
  Button,
  H3,
  XStack
} from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";
import { TextInput } from "react-native-gesture-handler";
import { MyStack } from "../components/MyStack";
import { YStack } from "tamagui";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "@env";

import axios from "axios";

export default function User() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [psk, setPsk] = useState("");

  const login = async () => {
    axios
      .post(`${API_URL}/auth/login`, { email, password: psk })
      .then((res) => {
        if (!res.data.token) throw "Token INvalido";
        AsyncStorage.setItem("user_token", res.data.token);
        AsyncStorage.setItem("user_role", res.data.role.id.toString());
        router.replace("/user");
      })
      .catch((err) => {
        alert("Datos Incorrectos");
      });
  };
  return (
    <MyStack justifyContent="flex-start">
      <XStack
        alignItems="center"
        space="$2"
      >
        <Button
          icon={ArrowLeft}
          onPress={router.back}
        />
        <H3>Inicia sesión</H3>
      </XStack>
      <YStack
        justifyContent={"center"}
        maxWidth={400}
        flex={1}
        padding={"$6"}
        space={"$5"}
      >
        <Input
          placeholder="Email"
          onChangeText={setEmail}
        ></Input>

        <Input
          placeholder="Contraseña"
          onChangeText={setPsk}
        ></Input>

        <Button
          size="$3"
          theme="active"
          onPress={login}
        >
          Acceder
        </Button>
      </YStack>
    </MyStack>
  );
}
