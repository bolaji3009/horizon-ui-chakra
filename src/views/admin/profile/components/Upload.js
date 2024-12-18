import React from "react";
// Chakra imports
import { Icon, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Dropzone from "components/reusable/Dropzone";
// Assets
import { MdUpload } from "react-icons/md";

export default function Upload(props) {
  const { used, total, ...rest } = props;
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const brandColor = useColorModeValue("brand.500", "brand.400");
  const textColorSecondary = "gray.400";
  return (
    <Dropzone
      w={{ base: "100%", "2xl": "auto" }}
      me='36px'
      maxW={{ base: "100%", "2xl": "270px" }}
      content={
        <Box>
          <Icon as={MdUpload} w='8px' h='8px' color={textColorSecondary} />
          <Text fontSize='sm' fontWeight='500' color={textColorSecondary} mt='4px'>
            Click to upload
          </Text>
        </Box>
      }
      {...rest}>
      <Flex
        w='100%'
        h='100%'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
        color={textColorSecondary}>
        <Icon as={MdUpload} w='24px' h='24px' mb='12px' />
        <Text fontSize='sm' fontWeight='500' color={textColorSecondary}>
          Drag and drop
        </Text>
        <Text fontSize='xs' color={textColorSecondary} mt='6px'>
          or click to browse
        </Text>
      </Flex>
    </Dropzone>
  );
}
