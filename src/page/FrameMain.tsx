// Lib
import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
// Component
import Header from "@component/header/Header";
import Footer from "@component/footer/Footer";

const FrameMain = () => (
  <Flex
    flexWrap="wrap"
    flexDirection="column"
    w="100vw"
    overflow="hidden"
    bgColor="bg.primary"
  >
    <Header />
    <Flex flex="1" w="100%" overflow="hidden" zIndex={1}>
      <Outlet />
    </Flex>
    <Footer />
  </Flex>
);

export default FrameMain;
