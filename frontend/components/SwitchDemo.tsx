import { Label, Switch, XStack } from "tamagui";

export default function SwitchDemo() {
  return (
    <XStack
      alignItems="center"
      justifyContent="space-between"
      space="$4"
    >
      <Label
        htmlFor="switch-demo"
        flex={1}
        height="$2"
        lineHeight="$2"
      >
        Dark mode (does nothing)
      </Label>
      
    </XStack>
  );
}
