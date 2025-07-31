import Image from "next/image";
import { Box, HStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <HStack>
      {" "}
      // 24pxの隙間を空ける
      <Box w="40px" h="40px" bg="yellow.200">
        1
      </Box>
      <Box w="20px" h="20px" bg="tomato">
        2
      </Box>
      <Box w="40px" h="40px" bg="pink.100">
        3
      </Box>
    </HStack>
  );
}
