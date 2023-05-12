//  Lib
import { useRef } from "react";
import type { ReactNode } from "react";
import { Box, Icon, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

//  중앙 포커스 라운드 Element
const DecoCenterBox = (iconProps: any) => {
  return (
    <Icon
      width="235"
      height="696"
      viewBox="0 0 235 696"
      fill="none"
      {...iconProps}
    >
      <path
        d="M182.754 685.18C127.307 646.903 82.4274 595.24 52.2791 534.986C22.1308 474.732 7.69091 407.838 10.2994 340.513C12.9079 273.188 32.4802 207.613 67.2002 149.872C101.92 92.1309 150.663 44.0957 208.905 10.2235L224.307 36.7075C170.526 67.9854 125.517 112.341 93.4562 165.66C61.3955 218.978 43.3223 279.531 40.9136 341.699C38.5049 403.868 51.8388 465.638 79.678 521.277C107.517 576.916 148.959 624.621 200.159 659.967L182.754 685.18Z"
        fill="white"
      />
    </Icon>
  );
};

//  중앙 포커스 라운드 Element
const DecoCenterBox02 = (iconProps: any) => {
  return (
    <Icon
      width="278"
      height="56"
      viewBox="0 0 278 56"
      fill="none"
      {...iconProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.8506 45.0226L10.3154 39.1076C92.1382 4.03833 184.249 1.46543 267.902 31.9126L265.701 37.9598C241.071 28.995 215.693 22.9465 190.065 19.8003L189.143 27.3095C161.167 23.8745 132.871 23.9733 104.92 27.6035L103.945 20.1014C72.8315 24.1416 42.1682 32.457 12.8506 45.0226Z"
        fill="white"
      />
    </Icon>
  );
};

//  중앙 포커스 라운드 Element
const DecoCenterBox03 = (iconProps: any) => {
  return (
    <Icon
      width="499"
      height="476"
      viewBox="0 0 499 476"
      fill="none"
      {...iconProps}
    >
      <path
        d="M143.711 1.68514C92.693 25.7474 51.3955 66.4731 26.6245 117.15C1.85348 167.828 -4.91283 225.432 7.44074 280.47C19.7943 335.508 50.5305 384.695 94.5837 419.925C138.637 455.154 193.378 474.323 249.786 474.274C306.193 474.224 360.9 454.958 404.891 419.65C448.882 384.343 479.531 335.102 491.787 280.042C504.044 224.982 497.175 167.39 472.315 116.756C447.454 66.1229 406.085 25.4703 355.025 1.49831"
        stroke="currentColor"
        stroke-opacity="0.5"
        stroke-width="1.93867"
        stroke-linecap="round"
        stroke-linejoin="bevel"
      />
    </Icon>
  );
};

//  상세 좌측 Frame
const DecoFrameL = ({
  children,
  ...rest
}: {
  children?: ReactNode;
  [x: string]: any;
}) => {
  return (
    <Flex
      p="6rem 0"
      w="25%"
      h="100%"
      direction="column"
      justify="space-between"
      pointerEvents="fill"
      zIndex={2}
      {...rest}
    >
      <Box
        w="100%"
        h="1px"
        bg="linear-gradient(270deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 90%)"
        flex="none"
      />
      {children}
      <Box
        w="100%"
        h="1px"
        bg="linear-gradient(270deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 90%)"
        flex="none"
      />
    </Flex>
  );
};

// 좌우측 랭킹 박스 태그
const DecoRankTag = ({
  children,
  width,
  height,
  fillColor,
  ...rest
}: {
  children?: ReactNode;
  width?: any;
  height?: any;
  fillColor?: any;
  [x: string]: any;
}) => {
  return (
    <Flex
      pos="relative"
      width={width || "2.25rem"}
      height={height || "1.125rem"}
      justify="center"
      gap="2px"
      flex="none"
      {...rest}
    >
      {children}
      <Icon
        pos="absolute"
        top={0}
        left={0}
        width={width || "2.25rem"}
        height={height || "1.125rem"}
        viewBox="0 0 35 18"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.19922 1H29.8764L34.1992 5.32282V17H5.52367L1.19922 12.6755V1Z"
          fill={fillColor || "currentColor"}
        />
        <path
          d="M29.8764 1L30.0532 0.823223L29.98 0.75H29.8764V1ZM1.19922 1V0.75H0.949219V1H1.19922ZM34.1992 5.32282H34.4492V5.21926L34.376 5.14604L34.1992 5.32282ZM34.1992 17V17.25H34.4492V17H34.1992ZM5.52367 17L5.34689 17.1768L5.42012 17.25H5.52367V17ZM1.19922 12.6755H0.949219V12.7791L1.02244 12.8523L1.19922 12.6755ZM29.8764 0.75H1.19922V1.25H29.8764V0.75ZM34.376 5.14604L30.0532 0.823223L29.6996 1.17678L34.0224 5.49959L34.376 5.14604ZM34.4492 17V5.32282H33.9492V17H34.4492ZM5.52367 17.25H34.1992V16.75H5.52367V17.25ZM1.02244 12.8523L5.34689 17.1768L5.70045 16.8232L1.376 12.4988L1.02244 12.8523ZM0.949219 1V12.6755H1.44922V1H0.949219Z"
          fill="#595959"
        />
      </Icon>
    </Flex>
  );
};

//  상세 우측 Frame
const DecoFrameR = ({
  children,
  ...rest
}: {
  children?: ReactNode;
  [x: string]: any;
}) => {
  return (
    <Flex
      p="6rem 0"
      w="25%"
      h="100%"
      direction="column"
      justify="space-between"
      pointerEvents="fill"
      zIndex={2}
      {...rest}
    >
      <Box
        w="100%"
        h="1px"
        bg="linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 90%)"
        flex="none"
      />
      {children}
      <Box
        w="100%"
        h="1px"
        bg="linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 90%)"
        flex="none"
      />
    </Flex>
  );
};

//  중앙 포커스 라운드
const DecoFrameCenter = ({ children }: any) => {
  const boxRef = useRef<HTMLDivElement | null>(null);

  return (
    <Flex
      pos="relative"
      p="6rem 0"
      w="50%"
      h="100%"
      direction="row"
      justify="space-between"
      gap="0.625rem"
      zIndex={1}
    >
      <Flex
        ref={boxRef}
        pos="relative"
        w="100%"
        h="auto"
        zIndex={-1}
        pointerEvents="none"
        justify="center"
        align="center"
      >
        {children}
        {/* 중앙 원형 */}
        <Box
          as={motion.div}
          pos="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          bg="radial-gradient(65.83% 65.83% at 50% 50%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 100%)"
          borderRadius="50%"
          border="1px solid"
          borderColor="#26232380"
          boxShadow="0px 0px 10px 2px #00000040"
          // transition="0.2s ease"
          initial={{
            width: 0,
            height: 0,
            maxWidth: "78vh",
            maxHeight: "78vh",
          }}
          animate={{
            width: "60vw",
            height: "60vw",
            maxWidth: "78vh",
            maxHeight: "78vh",
          }}
          exit={{
            width: "60vw",
            height: "60vw",
            maxWidth: "78vh",
            maxHeight: "78vh",
          }}
        >
          {/* 중앙 미들 원형 */}
          <Box
            as={motion.div}
            pos="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            w="93%"
            h="93%"
            transition="0.3s 0.2s linear"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
          >
            <DecoCenterBox03
              pos="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -48%)"
              width="99%"
              height="99%"
              filter="drop-shadow(0px 0px 4px #00000080)"
              color="font.secondary"
            />
            {/* 중앙 좌측 미들 박스 */}
            <Flex
              as={motion.div}
              pos="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              opacity="0.75"
              transition="0.2s 0.5s linear"
              initial={{
                transform: "rotate(0deg)",
              }}
              animate={{
                transform: "rotate(-90deg)",
              }}
            >
              <DecoCenterBox
                position="absolute"
                bottom="-32%"
                left="50%"
                transform="translateX(-52%) rotate(271.4deg)"
                width="92%"
                height="92%"
                filter="drop-shadow(0px 0px 10px #00000040)"
              />
            </Flex>
            {/* 중앙 우측 미들 박스 */}
            <Flex
              as={motion.div}
              pos="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              opacity="0.75"
              transition="0.3s 0.5s linear"
              initial={{
                transform: "rotate(0deg)",
              }}
              animate={{
                transform: "rotate(84deg)",
              }}
            >
              <DecoCenterBox
                position="absolute"
                bottom="-32%"
                left="50%"
                transform="translateX(-52%) rotate(271.4deg)"
                width="92%"
                height="92%"
                filter="drop-shadow(0px 0px 10px #00000040)"
              />
            </Flex>
            {/* 중앙 중심 원형 */}
            <Box
              as={motion.div}
              pos="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              w="90%"
              h="90%"
              borderRadius="50%"
              border="3px solid transparent"
              borderTop="none"
              borderBottom="none"
              __css={{
                backgroundImage:
                  "linear-gradient(transparent, transparent), linear-gradient(to right, red 0%,  orange 50%, red 100%)",
                backgroundOrigin: "border-box",
                backgroundClip: "content-box, border-box",
              }}
              transition="0.3s 0.6s linear"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
            >
              <Flex
                as={motion.div}
                pos="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                transition="0.3s 0.9s linear"
                initial={{
                  transform: "rotate(0deg)",
                }}
                animate={{
                  transform: "rotate(89deg)",
                }}
              >
                <DecoCenterBox02
                  pos="absolute"
                  top="-2%"
                  left="50%"
                  transform="translateX(-50%) rotate(1.5deg)"
                  width="50%"
                  height="8%"
                  filter="drop-shadow(0px 0px 10px #00000040)"
                />
              </Flex>
              <Flex
                as={motion.div}
                pos="absolute"
                bottom="0"
                left="0"
                width="100%"
                height="100%"
                transition="0.3s 0.9s linear"
                initial={{
                  transform: "rotate(0deg)",
                }}
                animate={{
                  transform: "rotate(89deg)",
                }}
              >
                <DecoCenterBox02
                  pos="absolute"
                  bottom="-2%"
                  left="50%"
                  transform="translateX(-50%) rotate(181.5deg)"
                  width="50%"
                  height="8%"
                  filter="drop-shadow(0px 0px 10px 0px #00000040)"
                />
              </Flex>
              <Box
                pos="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                w="95%"
                h="95%"
                borderRadius="50%"
                border="1px dashed"
                borderColor="font.inverse"
              />
            </Box>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export { DecoFrameL, DecoFrameR, DecoFrameCenter, DecoRankTag };
