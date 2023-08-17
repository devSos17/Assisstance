import { Link, useRouter } from "expo-router";
import {
  Card,
  Paragraph,
  H2,
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
  XStack,
  View
} from "tamagui";

import { MyStack } from "../../components/MyStack";
import { YStack } from "tamagui";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

import { API_URL } from "@env";

import axios from "axios";

export default function Eventos() {
  const router = useRouter();

  const [eventos, setEventos] = useState([]);

  const loadStorage = async () => {
    try {
      const user_token = await AsyncStorage.getItem("user_token");
      axios
        .get(`${API_URL}/Eventos/user`, {
          headers: { Authorization: `Bearer ${user_token}` }
        })
        .then((res) => {
          console.log(res.data);
          setEventos(res.data);
        })
        .catch((err) => {
          alert("Algo salio mal");
          console.log(err);
        });
    } catch (error) {
      console.error("Error al cargar la variable desde AsyncStorage:", error);
    }
  };

  useEffect(() => {
    loadStorage();
  }, []);
  return (
    <MyStack justifyContent="flex-start">
      <YStack
        justifyContent={"center"}
        maxWidth={400}
        flex={1}
        padding={"$6"}
        space={"$5"}
      >
        {eventos.map((item, index) => (
          <Card
            elevate
            size="$4"
            bordered
            key={index}
          >
            <Card.Header padded>
              <H2>{item.Nombre}</H2>
            </Card.Header>
            <YStack
              padding={"$6"}
              space={"$5"}
            >
              <Paragraph>Lugar: {item.Lugar}</Paragraph>
              <Paragraph>Fecha: {item.Fecha}</Paragraph>
              <Paragraph>Duracion: {item.Duracion}min</Paragraph>
              <Paragraph>Capacidad: {item.Capacidad}</Paragraph>
              <Paragraph>Ponente: {item.Ponente}</Paragraph>
              <Paragraph>Descripcion: {item.Descripcion}</Paragraph>
            </YStack>
          </Card>
        ))}
      </YStack>
    </MyStack>
  );
}
