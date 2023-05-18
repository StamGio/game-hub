import { Platform } from "../hooks/usePlatforms";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

export const PlatformiconList = ({ platforms }: Props) => {
  // index signature
  const iconMap: { [key: string]: IconType } = {
    // name : PlayStation
    // slug : playstation // better count on slug

    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
  };

  return (
    // HStack for Horizontal stack
    <HStack marginY={"10px"}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};
