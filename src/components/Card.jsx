import { Box, Center, Heading, Text, Stack, Avatar, useColorModeValue ,Flex} from "@chakra-ui/react";
import { FiArrowUpCircle } from "react-icons/fi";

export default function Card({ report, connectWithReportContract }) {

  const handleUpvote = async () => {
    console.log('upvote')
  }

  return (
    <Center py={6}>
      <Box
        maxW={"445px"}
        w={"full"}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box h={"210px"} bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
          <img src={report.image_url} alt="Example" />
        </Box>
        <Stack>
          <Heading
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {report.title}
          </Heading>
          <Text color={"gray.500"}>{report.report_msg}</Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          {/* <Avatar src={'https://avatars0.githubusercontent.com/u/1164541?v=4'} /> */}
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>{report.owner}</Text>
            <Flex justifyContent={"start"} alignItems={"center"} cursor={"pointer"} onClick={handleUpvote}>
              <Text color={"gray.500"}>Upvote</Text>
              <FiArrowUpCircle />
            </Flex>

            <Text color={"gray.500"}>
              Upvotes: 5
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
