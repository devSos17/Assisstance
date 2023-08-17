//Opciones
import { Check, ChevronDown, ChevronUp } from "@tamagui/lucide-icons";
import { Link, useRouter } from "expo-router";
import { Adapt, Fieldset, Label, Select, Sheet, useIsomorphicLayoutEffect, Input, Button, H3, XStack } from "tamagui";

import { MyStack } from "../../components/MyStack";
import {YStack}from "tamagui";

export default function User() {

    const router = useRouter();

  return (


<MyStack justifyContent="flex-start">

    <YStack
    justifyContent={"center"}
      
    maxWidth={400}
   
    flex= {1}
   
    padding={"$6"}
    space= {"$5"}
  >
    
    <Button onPress={() => router.push("/Admin/agregarEvento")}>
        AGREGAR EVENTO
      </Button>

      <Button onPress={() => router.push("/Admin/ConsultarEventos")}>
        CONSULTAR EVENTOS
      </Button>
    
  </YStack>
  </MyStack>
  );
}