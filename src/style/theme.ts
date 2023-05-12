//  Lib
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
//  Default
import themeReset from "@style/reset";
//  color
import colorTheme from "@style/color";
//  Component Theme
import themeHeading from "@style/theme/component/themeHeading";
// import themeInput from "@styles/theme/components/common/themeInput";
// import themeBtn from "@styles/theme/components/common/themeBtn";
// import themeTag from "@styles/theme/components/common/themeTag";
// import themeCheckbox from "@styles/theme/components/common/themeCheckbox";
// import themeAccordion from "@styles/theme/components/menu/themeAccordion";
import themeLink from "@style/theme/component/themeLink";
// import themeSelect from "@styles/theme/components/common/themeSelect";
// import themeTable from "@styles/theme/components/table/themeTable";
// import themeForm from "@styles/theme/components/form/themeForm";
// import themeSwitch from "@styles/theme/components/common/themeSwitch";
// import themeRadio from "@styles/theme/components/common/themeRadio";
// import themeText from "@styles/theme/components/common/themeText";
// import themeTextArea from "@styles/theme/components/common/themeTextArea";
// import themeDrawer from "@styles/theme/components/modal/themeDrawer";
// import themeTabs from "@styles/theme/components/menu/themeTabs";
// import themeList from "@styles/theme/components/list/themeList";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const theme = extendTheme({
  config,
  styles: {
    global: themeReset,
  },
  colors: colorTheme,
  size: {},
  fonts: {
    main: "Noto Sans KR, sans-serif",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.25rem",
    xl: "1.5rem",
    "2xl": "2.5rem",
    "3xl": "3rem",
    title: "1.75rem",
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    strong: 700,
    heavy: 900,
  },
  lineHeights: {},
  letterSpacings: {},
  textStyles: {
    base: {
      fontFamily: "main",
      fontStyle: "normal",
    },
  },
  radii: {},
  breakpoints: {
    mobile: "600px",
    tablet: "1000px",
    pc: "1280px",
  },
  // components: {
  //   Accordion: themeAccordion,
  //   Checkbox: themeCheckbox,
  //   Radio: themeRadio,
  //   Select: themeSelect,
  Heading: themeHeading,
  Link: themeLink,
  //   Form: themeForm,
  //   Table: themeTable,
  //   Button: themeBtn,
  //   Input: themeInput,
  //   Tag: themeTag,
  //   Switch: themeSwitch,
  //   Drawer: themeDrawer,
  //   TextArea: themeTextArea,
  //   Tabs: themeTabs,
  //   Text: themeText,
  //   List: themeList,
  // },
});

export default theme;
