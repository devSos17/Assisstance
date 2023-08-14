import { Github, Twitter } from "@tamagui/lucide-icons";
import { Link, useRouter } from "expo-router";

import {
  Button,
  H1,
  ListItem,
  Paragraph,
  Separator,
  YGroup,
  YStack
} from "tamagui";

import { MyStack } from "../components/MyStack";

export default function Home() {
  const router = useRouter();

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
       
        flex= {1}
       
        padding={"$6"}
        space= {"$5"}

      
    >
      <Button onPress={() => router.push("/users/testuser")}>
        INICIAR SESIÓN
      </Button>
      
      
    
      
      <Button onPress={() => router.push("/Regritos/registro")}>
        REGISTRARSE
      </Button>
      </YStack>
      
     
      
      
      
    </MyStack>
  );
}
