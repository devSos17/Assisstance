import { useState } from "react";
import { ArrowLeft } from "@tamagui/lucide-icons";
import { useRouter, useSearchParams } from "expo-router";
import { Check, ChevronDown, ChevronUp } from "@tamagui/lucide-icons";
import { Adapt, Fieldset, Label, Select, Sheet, useIsomorphicLayoutEffect, Input, Button, H3, XStack } from "tamagui";

import { MyStack } from "../../components/MyStack";
import {YStack}from "tamagui";

export default function User() {
  const [val, setVal] = useState("apple");
  const router = useRouter();

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
        <H3>Registro Invitado</H3>

    
      </XStack>
    <YStack
    justifyContent={"center"}
      
    maxWidth={400}
   
    flex= {1}
   
    padding={"$6"}
    space= {"$5"}
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
    <Button size="$3" theme="active">Acceder</Button>
  </YStack>
  </MyStack>
  );
}