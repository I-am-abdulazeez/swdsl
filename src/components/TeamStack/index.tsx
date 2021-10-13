import { Avatar } from "@chakra-ui/avatar";
import { Box, Stack } from "@chakra-ui/layout";
import { FC } from "react";

const TeamStack: FC = (): JSX.Element => {
  return (
    <>
      <Stack direction="row" spacing={3} width={{ base: "unset", md: "250px" }}>
        <Avatar size="sm" bg="#EDF2F7" border="1px solid #A5B4C6" />
        <Avatar size="sm" bg="#EDF2F7" border="1px solid #A5B4C6" />
        <Avatar size="sm" bg="#EDF2F7" border="1px solid #A5B4C6" />
      </Stack>

      <Stack direction="row" spacing={3} width={{ base: "unset", md: "250px" }}>
        <Avatar size="sm" name="D" bg="#C97200" />
        <Avatar size="sm" name="S" bg="#C97200" />
        <Avatar size="sm" name="L" bg="#C97200" />
      </Stack>
    </>
  );
};

export default TeamStack;
