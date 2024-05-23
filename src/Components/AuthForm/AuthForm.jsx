import { Box, VStack, Image, Flex, Text, Center } from "@chakra-ui/react"
import React, { useState } from "react"
import Login from "./Login";
import Signup from "./Signup";
import GoogleAuth from "./GoogleAuth";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
    
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src="/logo.png" h={24} cursor={"pointer"} alt={"Instagram"} />

          {isLogin ? <Login/>: <Signup/>}

          {/*-------------------------------  OR  -------------------------------*/}
          <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
            <Box border={"1px solid gray"} w={"45%"} />
            <Text margin={1} color={"white"}>OR</Text>
            <Box border={"1px solid gray"} w={"45%"} />
            <hr />
          </Flex>

          <GoogleAuth prefix={isLogin ? "Log in" : "Sign up"} />

       

        </VStack>
      </Box>

      <Box border={"1px solid grey"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"} gap={3}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account" : "Already have an account"}
          </Box>

          <Box onClick={() => setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
            {isLogin ? "Sign Up" : "Log In"}
          </Box>
        </Flex>
      </Box>

    </>

  )
}

export default AuthForm
