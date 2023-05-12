import { Flex } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Flex
      pos="fixed"
      top={0}
      left={0}
      zIndex={2}
      w="100vw"
      h="4.5rem"
      bgColor="font.inverse"
      borderBottom="1px solid"
    >
      Header
    </Flex>
  );
};

export default Header;
