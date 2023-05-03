import { useColorMode, HStack, Switch, Text } from "@chakra-ui/react";

const ColorMode = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      <Text> {colorMode === "dark" ? "Dark" : "Light"} Mode</Text>
    </HStack>
  );
};

export default ColorMode;
