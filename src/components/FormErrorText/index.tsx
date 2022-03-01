import { Text } from "@chakra-ui/react";
import React from "react";

const FormErrorText: React.FC<{ children: React.ReactNode }> = (props) => {
  const { children } = props;

  return (
    <Text fontSize={"xs"} mt={1} color={"red.500"}>
      {children}
    </Text>
  );
};

export default FormErrorText;
