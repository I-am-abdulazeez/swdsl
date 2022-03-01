import { Avatar } from "@chakra-ui/avatar";
import { Stack } from "@chakra-ui/layout";

const TeamStack: React.FC = () => {
  return (
    <>
      <Stack direction="row" spacing={3} width={{ base: "unset", md: "250px" }}>
        <Avatar size="sm" bg="#EDF2F7" border="1px solid #A5B4C6" />
        <Avatar size="sm" bg="#EDF2F7" border="1px solid #A5B4C6" />
        <Avatar size="sm" bg="#EDF2F7" border="1px solid #A5B4C6" />
      </Stack>

      <Stack direction="row" spacing={3} width={{ base: "unset", md: "250px" }}>
        <Avatar size="sm" name="D" bg="#501815" />
        <Avatar size="sm" name="S" bg="#501815" />
        <Avatar size="sm" name="L" bg="#501815" />
      </Stack>
    </>
  );
};

export default TeamStack;
