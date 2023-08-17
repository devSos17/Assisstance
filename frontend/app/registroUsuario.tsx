import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect, useMemo } from "react";
import { Check, ArrowLeft } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import {
  Select,
  Checkbox,
  Label,
  Input,
  Button,
  H3,
  XStack,
  ScrollView
} from "tamagui";

import { MyStack } from "../components/MyStack";
import { YStack } from "tamagui";
import { API_URL } from "@env";

import axios from "axios";

export default function User() {
  const [liCheck, setLi] = useState(false);
  const [ciCheck, setCi] = useState(false);
  const [nombre, setNombre] = useState(null);
  const [aPaterno, setPaterno] = useState(null);
  const [aMaterno, setMaterno] = useState(null);
  const [edad, setEdad] = useState(null);
  const [genero, setGenero] = useState(null);
  const [generos, setGeneros] = useState(null);
  const [nacionalidadl, setNacionalidad] = useState(null);
  const [paises, setPaises] = useState(null);
  const [eNacimiento, setNacimiento] = useState(null);
  const [estados, setEstados] = useState(null);
  const [eCivil, setCivil] = useState(null);
  const [estadosCiviles, setCiviles] = useState(null);
  const [cIndigena, setComunidad] = useState(null);
  const [lInidigena, setLengauaje] = useState(null);
  const [discapacidad, setDiscapacidad] = useState(null);
  const [discpacidades, setDiscapacidades] = useState(null);
  const [dependencia, setDependecia] = useState(null);
  const router = useRouter();

  const getInvitadoToken = () => {
    axios
      .get(`${API_URL}/auth/invitado`)
      .then((res) => {
        AsyncStorage.setItem("user_token", res.data.token);
        AsyncStorage.setItem("user_role", res.data.role.id.toString());
        console.log("invitado");
      })
      .catch((err) => {
        console.log("invitado", err);
      });
  };

  const loadStorage = async () => {
    try {
      const user_role = await AsyncStorage.getItem("user_role");
      const user_token = await AsyncStorage.getItem("user_token");
      axios.get(`${API_URL}/auth/status`).then(({ data }) => {
        alert(data);
      });
    } catch (error) {
      console.error("Error al cargar la variable desde AsyncStorage:", error);
    }
  };

  const getData = async () => {
    axios
      .get(`${API_URL}/generos`, {
        headers: { Authorization: `Bearer ${user_token}` }
      })
      .then(({ data }) => setGeneros(data))
      .catch((err) => {
        console.log("generos", err);
      });
    // axios
    //   .get(`${API_URL}/nacionalidad`)
    //   .then(({ data }) => setPaises(data));
    // axios.get(`${API_URL}/estados`).then(({ data }) => setEstados(data));
    // axios
    //   .get(`${API_URL}/estadoCivil`)
    //   .then(({ data }) => setCiviles(data));
    // axios
    //   .get(`${API_URL}/discpacidad`)
    //   .then(({ data }) => setDiscapacidades(data));
  };
  useEffect(() => {
    // loadStorage();
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
          <Input
            onChangeText={setNombre}
            placeholder="Nombre"
          ></Input>
          <Input
            onChangeText={setPaterno}
            placeholder="Apellido paterno"
          ></Input>
          <Input
            onChangeText={setMaterno}
            placeholder="Apellido materno"
          ></Input>
          <Input
            onChangeText={setEdad}
            placeholder="Edad"
          ></Input>
          {/*
          <Select onValueChange={setGenero}>
            <Select.Trigger>
              <Select.Value placeholder="Genero" />
            </Select.Trigger>
            <Select.Content>
              <Select.ScrollUpButton />
              <Select.Viewport>
                <Select.Group>
                  {generos.map((item, i) => (
                    <Select.Item
                      index={i}
                      key={item.nombre}
                      value={item.nombre.toLowerCase()}
                    >
                      <Select.ItemText>{item.nombre}</Select.ItemText>
                      <Select.ItemIndicator marginLeft="auto">
                        <Check size={16} />
                      </Select.ItemIndicator>
                    </Select.Item>
                  ))}
                </Select.Group>
              </Select.Viewport>
              <Select.ScrollDownButton />
            </Select.Content>
          </Select>
*/}

          <XStack
            alignItems="center"
            space="$4"
          >
            <Checkbox
              size="$3"
              id="check-ci"
              checked={ciCheck}
              onCheckedChange={() => setCi(!ciCheck)}
            >
              <Checkbox.Indicator>
                <Check />
              </Checkbox.Indicator>
            </Checkbox>
            <Label
              size="$2"
              htmlFor="check-ci"
            >
              ¿Pertenece a una comunidad indigena?
            </Label>
          </XStack>
          {ciCheck ? <Input placeholder="Comunidad indigena"></Input> : null}
          <XStack
            alignItems="center"
            space="$4"
          >
            <Checkbox
              size="$3"
              id="check-li"
              checked={liCheck}
              onCheckedChange={() => setLi(!liCheck)}
            >
              <Checkbox.Indicator>
                <Check />
              </Checkbox.Indicator>
            </Checkbox>
            <Label
              size="$2"
              htmlFor="check-li"
            >
              ¿Habla un lenguaje indigena?
            </Label>
          </XStack>
          {liCheck ? <Input placeholder="Lengua indigena"></Input> : null}

          <Input
            onTextInput={setDependecia}
            placeholder="Dependencia"
          ></Input>
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
