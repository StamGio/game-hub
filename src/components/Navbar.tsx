import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorMode from "./ColorMode";
import Searchinput from "./Searchinput";

interface Props {
  onSearch: (searchInput: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding="15px">
      <Image src={logo} boxSize="60px"></Image>
      <Searchinput onSearch={onSearch} />
      <ColorMode />
    </HStack>
  );
};

export default Navbar;
