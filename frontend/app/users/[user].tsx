import { ArrowLeft } from "@tamagui/lucide-icons";
import { useRouter, useSearchParams } from "expo-router";
import { Button, H3, H6, XStack,  Input, SizeTokens, TextArea,YStack } from "tamagui";

import DialogDemo from "../../components/DialogDemo";
import { MyStack } from "../../components/MyStack";
import SelectDemo from "../../components/SelectDemo";
import SpinnerDemo from "../../components/SpinnerDemo";
import SwitchDemo from "../../components/SwitchDemo";

export default function User() {
  const router = useRouter();
  const params = useSearchParams();

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
        <H3>Inicia sesión</H3>

    
      </XStack>
      <YStack
      justifyContent={"center"}
        
      maxWidth={400}
     
      flex= {1}
     
      padding={"$6"}
      space= {"$5"}
    >
      <Input placeholder="Usuario"></Input>
  
      <Input placeholder="Contraseña"></Input>
    
      <Button size="$3" theme="active">Acceder</Button>
    </YStack>
      
      
      
      

      
      

      
    </MyStack>


    
    
  );
  
  
  
}


