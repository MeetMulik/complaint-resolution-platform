import { useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import MyDropzone from "./Dropzone";
import { connectWithReportContract, connectWallet } from "../api/index";
import { useNavigate } from "react-router-dom";

const Form1 = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [complaintTitle, setComplaintTitle] = useState("");
  const [complaintImage, setComplaintImage] = useState("");
  const [governmentBody, setGovernmentBody] = useState("");
  const [location, setLocation] = useState("");
  const [complaintDetails, setComplaintDetails] = useState("");
  const [account, setAccount] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contract = await connectWithReportContract();
    const connectAccount = await connectWallet();
    setAccount(connectAccount);
    console.log(connectAccount);
    const userName = await contract.getUsername(connectAccount);
    console.log(userName);
    setName(userName);

    setLoading(true);
    try {
      const contract = await connectWithReportContract();
      const response = await contract.addReport(
        complaintTitle,
        complaintImage,
        complaintDetails,
        userName,
        location,
        governmentBody
      );
      console.log(response);
      setLoading(false);
      setIsOpen(false);

      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Register a complaint
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="complaint-title" fontWeight={"normal"}>
            Complaint Title
          </FormLabel>
          <Input onChange={(e) => setComplaintTitle(e.target.value)} id="complaint-title" placeholder="Complaint Title" />
        </FormControl>
      </Flex>

      <FormControl mt="2%" mr="5%">
        <FormLabel htmlFor="complaint-image" fontWeight={"normal"}>
          Upload Image
        </FormLabel>
        <Input onChange={(e) => setComplaintImage(e.target.value)} id="complaint-image" placeholder="Upload the image for the complaint" type="text" />
      </FormControl>

      <FormControl mt="2%" mr="5%">
        <FormLabel htmlFor="complaint-category" fontWeight={"normal"}>
          Select Government Body
        </FormLabel>
        <Select onChange={(e) => setGovernmentBody(e.target.value)} placeholder="Select the category">
          <option value="Government Body 1">Government Body 1</option>
          <option value="Government Body 2">Government Body 2</option>
          <option value="Government Body 3">Government Body 3</option>
        </Select>
      </FormControl>

      <FormControl mt="2%" mr="5%">
        <FormLabel htmlFor="complaint-location" fontWeight={"normal"}>
          Location
        </FormLabel>
        <Input id="complaint-location" onChange={(e) => setLocation(e.target.value)} placeholder="Enter the location" />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="details" fontWeight={"normal"} mt="2%">
          Details of the complaint
        </FormLabel>
        <InputGroup size="md">
          <Textarea onChange={(e) => setComplaintDetails(e.target.value)} pr="4.5rem" type={"text"} placeholder="Enter the details for the complaint" />
          <InputRightElement width="4.5rem"></InputRightElement>
        </InputGroup>
      </FormControl>

      <Box mt={"2%"}>
        <Button w="7rem" colorScheme="red" variant="solid" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </>
  );
};

export default function MultiForm() {
  const toast = useToast();

  return (
    <>
      <Box borderWidth="1px" rounded="lg" shadow="1px 1px 3px rgba(0,0,0,0.3)" maxWidth={800} p={6} m="10px auto" as="form">
        <Form1 />
      </Box>
    </>
  );
}
