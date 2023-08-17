import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { ArrowLeft } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import { Input, Button, H3, XStack, ScrollView } from "tamagui";

import { MyStack } from "../../components/MyStack";
import { YStack } from "tamagui";
import { API_URL } from "@env";

import axios from "axios";

export default function User() {
  const [user_role, setUserRole] = useState(null);
  const [user_token, setToken] = useState(null);
  const router = useRouter();

  const getInvitadoToken = () => {
    axios.get(`${API_URL}/auth/invitado`).then((res) => {
      AsyncStorage.setItem("user_token", res.data.token);
      AsyncStorage.setItem("user_role", res.data.role.id.toString());
    });
  };

  const loadStorage = async () => {
    try {
      const user_role = await AsyncStorage.getItem("user_role");
      const user_token = await AsyncStorage.getItem("user_token");
      if (user_role == null) {
        setUserRole("invitado");
        AsyncStorage.setItem("user_role", "invitado");
      }
    } catch (error) {
      console.error("Error al cargar la variable desde AsyncStorage:", error);
    }
  };

  const getData = async () => {
    axios.get(`${API_URL}/auth/status`).then(({ data }) => {
      alert(data);
    });
  };
  useEffect(() => {
    loadStorage();
    getData();
  }, []);

  const register = () => {
    alert(user_role);
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
        <H3>Registro {}</H3>
      </XStack>

      <ScrollView>
        <YStack
          justifyContent={"center"}
          maxWidth={400}
          flex={1}
          padding={"$6"}
          space={"$5"}
        >
          <Input placeholder="Nombre"></Input>
          <Input placeholder="Apellido paterno"></Input>
          <Input placeholder="Apellido materno"></Input>

          <Input placeholder="Sexo"></Input>
          <Input placeholder="Estado civil"></Input>
          <Input placeholder="Estado Nacimiento"></Input>

          <Input placeholder="Nacionalidad"></Input>
          <Input placeholder="Comunidad indigena"></Input>
          <Input placeholder="Lengua indigena"></Input>

          <Input placeholder="Discapacidad"></Input>
          <Input placeholder="Ocupacion"></Input>
          <Input placeholder="Lugar asistencia"></Input>

          <Input placeholder="Cargo / puesto"></Input>
          <Button
            size="$3"
            theme="active"
            onPress={register}
          >
            Registrarse
          </Button>
        </YStack>
      </ScrollView>
    </MyStack>
  );
}
