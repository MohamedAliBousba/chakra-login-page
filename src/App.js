import React from "react";
import {
  Box,
  Container,
  Input,
  Stack,
  Avatar,
  Heading,
  Checkbox,
  Button,
  Link
} from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";

const App = () => {
  return (
    <Box d="flex" alignItems="center" justifyContent="center">
      <Container maxWidth="400" my="20">
        <Box d="flex" alignItems="center" flexDirection="column">
          <Avatar
            bg="purple"
            icon={<LockIcon fontSize="1.5rem" color="white" />}
          />
          <Heading as="h2" size="lg" fontSize="23" fontWeight="500" my="4">
            Sign in
          </Heading>
        </Box>
        <Stack spacing={5}>
          <Input variant="outline" placeholder="Email Address" />
          <Input variant="outline" placeholder="Password" />
          <Checkbox defaultIsChecked>Remember me</Checkbox>
          <Button colorScheme="blue">SIGN IN</Button>
          <Box d="flex" justifyContent="space-between">
            <Link color="blue" fontSize="15">Forgot Password?</Link>
            <Link color="blue" fontSize="15">Didn't have an account? Sign Up</Link>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default App;
