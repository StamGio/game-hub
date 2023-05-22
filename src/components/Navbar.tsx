import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorMode from "./ColorMode";
import Searchinput from "./Searchinput";

const Navbar = () => {
  return (
    <HStack padding="15px">
      <Image src={logo} boxSize="60px"></Image>
      <Searchinput />
      <ColorMode />
    </HStack>
  );
};

export default Navbar;
