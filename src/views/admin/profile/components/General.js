import {
  Flex,
  Grid,
  Icon,
  Progress,
  SimpleGrid,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import IconBox from "components/icons/IconBox";
import React from "react";
import { FaCube, FaPenFancy } from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";
import Information from "components/reusable/Information";
import { MdGroups, MdInfoOutline } from "react-icons/md";

const General = (props) => {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
      gap='20px'
      {...rest}>
      <Information
        boxShadow={"unset !important"}
        border={"unset !important"}
        title='Education'
        value='Stanford University'
      />
      <Information
        boxShadow={"unset !important"}
        border={"unset !important"}
        title='Languages'
        value='English, Spanish, Italian'
      />
      <Information
        boxShadow={"unset !important"}
        border={"unset !important"}
        title='Department'
        value='Product Design'
      />
      <Information
        boxShadow={"unset !important"}
        border={"unset !important"}
        title='Work History'
        value='Google, Facebook'
      />
      <Information
        boxShadow={"unset !important"}
        border={"unset !important"}
        title='Organization'
        value='Horizon UI'
      />
      <Information
        boxShadow={"unset !important"}
        border={"unset !important"}
        title='Birthday'
        value='20 July 1986'
      />
    </Grid>
  );
};

export default General;
