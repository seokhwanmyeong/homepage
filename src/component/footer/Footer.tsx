import { Link as RoutLink } from "react-router-dom";
import {
  Divider,
  Flex,
  Text,
  Link,
  List,
  ListItem,
  Heading,
} from "@chakra-ui/react";
import { IconLogo } from "@assets/icon";
import Inner from "@component/common/inner";

const Footer = () => {
  return (
    <Flex p="5rem 15rem" w="100%" bgColor="neutral.gray10">
      <Inner>
        <Flex p="5rem 4rem" w="100%" direction="column">
          <Flex justify="space-between">
            <Flex direction="column" gap="2rem">
              <IconLogo width="10.25rem" height="2rem" color="font.inverse" />
              <List display="flex" flexDirection="column" gap="1.5rem">
                <ListItem>
                  <FooterText text="(주)비즈레시피 | 대표 전호철" />
                </ListItem>
                <ListItem>
                  <FooterText text="사업자 등록번호: 457-81-00511" />
                  <FooterText text="통신판매업 신고번호: 457-81-00511" />
                </ListItem>
                <ListItem>
                  <FooterText text="Address:" />
                  <FooterText text="서울특별시 용산구 한강대로 366, 6층 629호 (트윈시티남산)" />
                </ListItem>
                <ListItem>
                  <FooterText text="Contact:" />
                  <FooterText
                    as={"a"}
                    text="cs@onthemap.kr"
                    textDecoration="underline"
                    cursor="pointer"
                    _hover={{
                      color: "primary.type7",
                    }}
                  />
                </ListItem>
              </List>
            </Flex>
            <Flex gap="2.5rem">
              <Flex direction="column" gap="1.5rem">
                <Heading
                  fontFamily="main"
                  fontSize="md"
                  fontWeight="400"
                  lineHeight="1.5"
                  color="font.inverse"
                >
                  서비스 소개
                </Heading>
                <List display="flex" flexDirection="column" gap="1rem">
                  <ListItem>
                    <FooterLink text="상권 분석" to="/" />
                  </ListItem>
                  <ListItem>
                    <FooterLink text="ERP" to="/" />
                  </ListItem>
                  <ListItem>
                    <FooterLink text="전자문서" to="/" />
                  </ListItem>
                  <ListItem>
                    <FooterLink text="API 연동" to="/" />
                  </ListItem>
                </List>
              </Flex>
              <Flex direction="column" gap="1rem">
                <Heading
                  fontFamily="main"
                  fontSize="md"
                  fontWeight="400"
                  lineHeight="1.5"
                  color="font.inverse"
                >
                  요금 안내
                </Heading>
                <List display="flex" flexDirection="column" gap="1rem">
                  <ListItem>
                    <FooterLink
                      text="다운로드"
                      to="/"
                      fontSize="md"
                      fontWeight="400"
                    />
                  </ListItem>
                  <ListItem>
                    <FooterLink
                      text="고객지원"
                      to="/"
                      fontSize="md"
                      fontWeight="400"
                    />
                  </ListItem>
                  <ListItem>
                    <FooterLink
                      text="온더맵 팀"
                      to="/"
                      fontSize="md"
                      fontWeight="400"
                    />
                  </ListItem>
                </List>
              </Flex>
            </Flex>
          </Flex>
          <Divider m="1.875rem 0 2rem" w="100%" borderColor="font.inverse" />
          <Flex w="100%" justify="space-between">
            <FooterText
              text="© 2023 ON THE MAP. All rights reserved."
              fontWeight="200"
            />
            <Flex gap="1.5rem">
              <Link
                as={RoutLink}
                to={"/policy"}
                key="policy"
                data-text="Privacy Policy"
                variant="base"
                fontFamily="main"
                fontSize="sm"
                fontWeight="100"
                lineHeight="1.5"
                color="font.inverse"
                textDecoration="underline"
                _hover={{
                  color: "primary.type7",
                }}
              >
                Privacy Policy
              </Link>
              <Link
                as={RoutLink}
                to={"/terms"}
                key="terms"
                data-text="Terms of Service"
                variant="base"
                fontFamily="main"
                fontSize="sm"
                fontWeight="100"
                lineHeight="1.5"
                color="font.inverse"
                textDecoration="underline"
                _hover={{
                  color: "primary.type7",
                }}
              >
                Terms of Service
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Inner>
    </Flex>
  );
};

const FooterText = ({ text, ...rest }: { text: string; [x: string]: any }) => {
  return (
    <Text
      variant="base"
      fontFamily="main"
      fontSize="sm"
      fontWeight="300"
      lineHeight="1.5"
      color="font.inverse"
      {...rest}
    >
      {text}
    </Text>
  );
};

const FooterLink = ({
  text,
  to,
  ...rest
}: {
  text: string;
  to: string;
  [x: string]: any;
}) => {
  return (
    <Link
      as={RoutLink}
      to={to}
      key={to}
      variant="base"
      fontFamily="main"
      fontSize="sm"
      fontWeight="200"
      lineHeight="1.5"
      color="font.inverse"
      _hover={{
        color: "primary.type7",
      }}
      {...rest}
    >
      {text}
    </Link>
  );
};

export default Footer;
