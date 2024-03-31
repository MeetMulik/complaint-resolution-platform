import { Box, Center, Heading, Text, Stack, Avatar, useColorModeValue ,Flex} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FiArrowUpCircle } from "react-icons/fi";

export default function Card({ report, connectWithReportContract }) {

  const [likes, setLikes] = useState(null);
  const [liked, setLiked] = useState(false);

  const getLikes = async () => {

    try {
      const contract = await connectWithReportContract();
      const response = await contract.getLikesOfReport(report.uid);
      await setLiked(parseInt(response._hex, 16));
      await setLikes(parseInt(response._hex, 16));
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpvote = async () => {
    console.log(report);
    try {
      const contract = await connectWithReportContract();
      const response = await contract.likeTheReport(report.uid);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getLikes();
  }, [likes]);

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
          <img src={report.image_url} alt="Example" width={370}/>
        </Box>
        <Box h={"20px"}></Box>
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
              {likes}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
