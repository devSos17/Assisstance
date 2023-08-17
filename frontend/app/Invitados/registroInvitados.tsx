import React, { useState } from "react";
import { ArrowLeft } from "@tamagui/lucide-icons";
import { ScrollView, View } from "react-native";
import { useRouter } from "expo-router";
import { H3, XStack, Input, Button, YStack } from "tamagui";

export default function User() {
  const [val, setVal] = useState("apple");
  const router = useRouter();

  return (
    <ScrollView style={{ flex: 1 }}>
      <View>
        <XStack alignItems="center" space="$2">
          <Button icon={ArrowLeft} onPress={router.back} />
          <H3>Registro Invitado</H3>
        </XStack>
        <YStack justifyContent="center" maxWidth={400} padding="$6" space="$5">
          <Input placeholder="Nombre" />
          <Input placeholder="Apellido paterno" />
          <Input placeholder="Apellido materno" />
          <Input placeholder="Sexo" />
          <Input placeholder="Estado civil" />
          <Input placeholder="Estado Nacimiento" />
          <Input placeholder="Nacionalidad" />
          <Input placeholder="Comunidad indigena" />
          <Input placeholder="Lengua indigena" />
          <Input placeholder="Discapacidad" />
          <Input placeholder="Ocupacion" />
          <Input placeholder="Lugar asistencia" />
          <Input placeholder="Cargo / puesto" />
          <Button size="$3" theme="active">
            Acceder
          </Button>
        </YStack>
      </View>
    </ScrollView>
  );
}

