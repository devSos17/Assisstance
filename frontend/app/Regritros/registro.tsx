//login
import { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "@tamagui/lucide-icons";
import { Adapt, Fieldset, Label, Select, Sheet, YStack, useIsomorphicLayoutEffect } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";
import { TextInput } from "react-native-gesture-handler";

export default function SelectDemo() {
  const [val, setVal] = useState("apple");

  return (
    
  
    <Fieldset>
      <TextInput>gfgfrrgrhgr</TextInput>
      <Label htmlFor="food">Select Demo</Label>
      
      
    </Fieldset>
  );
}