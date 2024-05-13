import { Box, Container, VStack, Image, Flex, Center } from "@chakra-ui/react"
import AuthForm from "../../Components/AuthForm/AuthForm"



const AuthPage = () => {
    return (
        <div>
            <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4} flexDirection={"column"}>
                <Container maxW={"container.md"} padding={0}>
                    <Flex alignItems={"center"} justifyContent={"Center"} gap={10}>

                        {/*left hand side */}
                        <Box display={{ base: "none", md: "block" }}>
                            <Image src="/auth.png" h={650} alt='Phone img' />
                        </Box>

                        {/* Right hand side */}
                        <VStack spacing={4} align={"stretch"}>
                            <AuthForm />
                            <Box textAlign={"Center"}>Get the app</Box>
                            <Flex gap={5} justifyContent={"center"}>
                                <Image src="/playstore.png" h={"10"} alt="Playstore logo"></Image>
                                <Image src="/microsoft.png" h={"10"} alt="Microsoft logo"></Image >

                            </Flex>

                </VStack>
                    </Flex>
            </Container>
        </Flex>
        </div >
    )
}

export default AuthPage
