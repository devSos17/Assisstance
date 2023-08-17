//Registro
import { useState } from "react";
import { ArrowLeft } from "@tamagui/lucide-icons";
import { useRouter, useSearchParams } from "expo-router";
import { Check, ChevronDown, ChevronUp } from "@tamagui/lucide-icons";
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
import { MyStack } from "../../components/MyStack";
import { YStack } from "tamagui";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "@env";

import axios from "axios";

export default function User() {
  const [email, setEmail] = useState("");
  const [psk, setPsk] = useState("");
  const [confirm, setConfirm] = useState("");
  const router = useRouter();

  const register = async () => {
    // CHeca confirm
    if (psk != confirm) {
      alert("Las Contraseñas no coiniciden");
      return;
    }
    axios
      .post(`${API_URL}/auth/register`, { email, password: psk })
      .then((res) => {
        console.log("register", res);
        AsyncStorage.setItem("user_token", res.data.token);
        AsyncStorage.setItem("user_role", res.data.role.id.toString());
        router.replace("/user");
      })
      .catch((err) => {
        if (err.response.status == 422) alert("Email Incorrecto");
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
        <H3>Registro Usuario</H3>
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
        <Input
          placeholder="Confirme Contraseña"
          onChangeText={setConfirm}
        ></Input>
        <Button
          size="$3"
          theme="active"
          onPress={register}
        >
          Acceder
        </Button>
      </YStack>
    </MyStack>
  );
}
