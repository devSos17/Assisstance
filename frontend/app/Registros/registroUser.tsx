//Registro
import { useState } from "react";
import { ArrowLeft } from "@tamagui/lucide-icons";
import { useRouter, useSearchParams } from "expo-router";
import { Check, ChevronDown, ChevronUp } from "@tamagui/lucide-icons";
import { Adapt, Fieldset, Label, Select, Sheet, useIsomorphicLayoutEffect, Input, Button, H3, XStack } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";
import { TextInput } from "react-native-gesture-handler";
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
        <H3>Registro Usuario</H3>

    
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
    <Input placeholder="Email"></Input>
    


    <Input placeholder="Password"></Input>
    <Input placeholder="Confirme Password"></Input>
    <Button size="$3" theme="active">Acceder</Button>
  </YStack>
  </MyStack>
  );
}