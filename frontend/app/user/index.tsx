//Opciones
import { Check, ChevronDown, ChevronUp } from "@tamagui/lucide-icons";
import { Link, useRouter } from "expo-router";
import {
  H1,
  View,
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

import { MyStack } from "../../components/MyStack";
import { YStack } from "tamagui";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

import { API_URL } from "@env";

import axios from "axios";

export default function User() {
  const router = useRouter();

  const [user_role, setRole] = useState(4);
  const [user_data, setData] = useState(true);

  const cerrarSesion = () => {
    AsyncStorage.removeItem("user_token");
    AsyncStorage.removeItem("user_role");
    router.replace("/");
    console.log("logout");
  };

  const loadStorage = async () => {
    try {
      setRole(parseInt(await AsyncStorage.getItem("user_role")));
      const user_token = await AsyncStorage.getItem("user_token");
      axios
        .get(`${API_URL}/auth/data`, {
          headers: { Authorization: `Bearer ${user_token}` }
        })
        .then(({ data }) => {
          setData(data.status ?? false);
        })
        .catch((err) => {
          console.log(err);
          alert("Error del sistema");
        });
    } catch (error) {
      console.error("Error al cargar la variable desde AsyncStorage:", error);
    }
  };

  useEffect(() => {
    loadStorage();
  }, []);

  let adminButtons = null;
  let sAdminButtons = null;
  if (user_role <= 2) {
    adminButtons = (
      <YStack space={"$5"}>
        <Button onPress={() => router.push("/user/indexEventos")}>
          Consultar Todos los Eventos
        </Button>
        <Button onPress={() => router.push("/user/createEventos")}>
          Crear Evento
        </Button>
      </YStack>
    );
  }

  if (user_role <= 1) {
    sAdminButtons = (
      <View>
        <Button onPress={() => router.push("/user/createAdmin")}>
          Crear Administrador
        </Button>
      </View>
    );
  }
  return (
    <MyStack justifyContent="flex-start">
      <YStack
        space="$4"
        maxWidth={600}
      >
        <H1 textAlign="center">Assisstance</H1>
      </YStack>
      <YStack
        justifyContent={"center"}
        maxWidth={400}
        flex={1}
        padding={"$6"}
        space={"$5"}
      >
        {!user_data ? (
          <Button onPress={() => router.push("/user/registerUsuario")}>
            Llenar Registro
          </Button>
        ) : (
          <YStack space={"$5"}>
            <Button onPress={() => router.push("/user/misEventos")}>
              Consultar Mis Eventos
            </Button>
            <Button onPress={() => router.push("/user/addEventos")}>
              Asisitir a evento
            </Button>
          </YStack>
        )}
        {adminButtons}
        {sAdminButtons}
      </YStack>
      <Button onPress={cerrarSesion}>Cerrar Sesion</Button>
    </MyStack>
  );
}
