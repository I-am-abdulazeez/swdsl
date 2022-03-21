import { Text } from "@chakra-ui/react";

import { ReactChildrenProp } from "@interfaces/index";

const FormErrorText: React.FC<ReactChildrenProp> = (props) => {
  const { children } = props;

  return (
    <Text fontSize={"xs"} mt={1} color={"red.500"}>
      {children}
    </Text>
  );
};

export default FormErrorText;
