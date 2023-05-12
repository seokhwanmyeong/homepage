//  Lib
import { Button, Flex, Text } from "@chakra-ui/react";
//  Deco
import { DecoFrameCenter } from "@assets/deco/DecoCenter";
//  Icon & Img
import mainBanner from "@assets/img/banner_main.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Flex pt="4.5rem" w="100%">
      <Flex
        as={"section"}
        id="banner"
        pos="relative"
        w="100%"
        h="80vh"
        bgColor="#000000"
        justify="center"
        align="center"
        _before={{
          content: '""',
          pos: "absolute",
          top: 0,
          left: 0,
          display: "block",
          width: "100%",
          height: "100%",
          bg: `no-repeat center url(${mainBanner})`,
          bgSize: "cover",
        }}
      >
        <DecoFrameCenter>
          <Flex
            as={motion.div}
            pos="relative"
            justify="center"
            align="center"
            direction="column"
            gap="1.5rem"
            transition="ease-out 0.1s"
            initial={{
              opacity: 0,
              top: "-20%",
            }}
            animate={{
              opacity: [0, 0.1, 1],
              top: ["-20%", "0%"],
            }}
          >
            <Flex justify="center" align="center" direction="column" gap="1rem">
              <Text
                fontFamily="main"
                fontSize="2rem"
                fontWeight="500"
                color="font.inverse"
                lineHeight="1"
                textShadow="0px 0px 10px rgba(0, 0, 0, 0.5)"
              >
                AI 도움으로 더 스마트한 결정
              </Text>
              <Text
                fontFamily="main"
                fontSize="2rem"
                fontWeight="500"
                color="font.inverse"
                lineHeight="1"
                textShadow="0px 0px 10px rgba(0, 0, 0, 0.5)"
              >
                빅데이터 상권 분석 엔진,
              </Text>
            </Flex>
            <Text
              fontFamily="main"
              fontSize="3.75rem"
              fontWeight="500"
              color="font.inverse"
              lineHeight="1"
              textShadow="0px 0px 10px rgba(0, 0, 0, 0.5)"
            >
              ON THE MAP
            </Text>
            <Flex direction="column">
              <Text
                fontFamily="main"
                fontSize="1.125rem"
                fontWeight="400"
                lineHeight="1.5"
                color="font.inverse"
                textAlign="center"
              >
                1회성 상권 분석 열람은 이제 그만,
              </Text>
              <Text
                fontFamily="main"
                fontSize="1.125rem"
                fontWeight="400"
                lineHeight="1.5"
                color="font.inverse"
                textAlign="center"
              >
                내 데이터를 전용 지도에 저장하여
              </Text>
              <Text
                fontFamily="main"
                fontSize="1.125rem"
                fontWeight="400"
                lineHeight="1.5"
                color="font.inverse"
                textAlign="center"
              >
                맞춤형 최적의 입지를 검색해보세요!
              </Text>
            </Flex>
            <Flex gap="1rem">
              <Button
                onClick={() => {
                  console.log("click");
                }}
              >
                바로 시작하기
              </Button>
              <Button
                onClick={() => {
                  console.log("click");
                }}
              >
                서비스 소개
              </Button>
            </Flex>
          </Flex>
        </DecoFrameCenter>
      </Flex>
      <Flex as={"section"} id="part1"></Flex>
      <Flex as={"section"} id="part2"></Flex>
      <Flex as={"section"} id="part3"></Flex>
      <Flex as={"section"} id="part4"></Flex>
      <Flex as={"section"} id="part5"></Flex>
      <Flex as={"section"} id="part6"></Flex>
      <Flex as={"section"} id="part7"></Flex>
    </Flex>
  );
};

export default Home;
