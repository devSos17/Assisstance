import { Link, useFocusEffect, useRouter } from "expo-router";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { API_URL } from "@env";

import axios from "axios";

import { Button, H1, Paragraph, YStack } from "tamagui";

import { MyStack } from "../components/MyStack";

export default function Home() {
  const router = useRouter();

  const [user_role, setRole] = useState(null);

  const resetTokens = async () => {
    AsyncStorage.removeItem("user_token");
    AsyncStorage.removeItem("user_role");
    router.push("/");
    console.log("reset");
  };

  const loadStorage = async () => {
    try {
      const user_token = await AsyncStorage.getItem("user_token");
      const user_role = await AsyncStorage.getItem("user_role");
      if (user_role) setRole(user_role);
      if (user_token) {
        axios
          .get(`${API_URL}/auth/status`, {
            headers: { Authorization: `Bearer ${user_token}` }
          })
          .then((res) => {
            console.log("user_role", user_role);
            if (parseInt(user_role) <= 3) router.replace("/user");
          })
          .catch(({ response }) => {
            if (response.status == 401) getInvitadoToken();
          });
      }
    } catch (error) {
      console.error("Error al cargar la variable desde AsyncStorage:", error);
    }
  };

  useEffect(() => {
    loadStorage();
  }, []);
  useFocusEffect(() => {
    if (parseInt(user_role) <= 3) router.replace("/user");
  });

  return (
    <MyStack>
      <YStack
        space="$4"
        maxWidth={600}
      >
        <H1 textAlign="center">Assisstance</H1>
        <Paragraph textAlign="center">
          Gestiona tus eventos con Assisstance
        </Paragraph>
      </YStack>
      <YStack
        justifyContent={"center"}
        maxWidth={400}
        flex={1}
        padding={"$6"}
        space={"$5"}
      >
        <Button onPress={() => router.push("/login")}>INICIAR SESIÓN</Button>
        <Button onPress={() => router.push("/register")}>REGISTRARSE</Button>
      </YStack>

      <Button onPress={() => router.push("/registroUsuario")}>INVITADO</Button>
      {parseInt(user_role) >= 1 ? (
        <Button onPress={resetTokens}>reset</Button>
      ) : null}
    </MyStack>
  );
}
