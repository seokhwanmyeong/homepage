import { Flex } from "@chakra-ui/react";

const Inner = ({ children }: any) => {
  return <Flex maxWidth="1920px">{children}</Flex>;
};

export default Inner;
