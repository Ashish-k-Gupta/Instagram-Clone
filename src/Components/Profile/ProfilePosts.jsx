import { Container, Flex, Grid, GridItem, Skeleton, VStack, HStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"

const ProfilePosts = () => {

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() =>{
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }, [])


  return (
    <>
      <Container maxW={'container.sm'} py={10} px={2}>
      {isLoading &&
      [0,1].map((_, idx) =>(
        <VStack key={idx} gap={4} alignItems={'center'} mb={10}>
          <Flex gap={2}>
            <Skeleton/>
            <HStack gap={2} alignItems={"flex-start"}>
                <Skeleton height='300px' w={"200px"} />
                <Skeleton height='300px' w={"200px"} />
                <Skeleton height='300px' w={"200px"} />
              </HStack>

          </Flex>
        </VStack>
      ))}
      </Container>




      {!isLoading && (

      <Grid templateColumns= {{sm:'repeat(1, 1fr)', md: "repeat(3, 1fr)"}} gap={1} columnGap={1} border={'1px solid white'} w={'full'}>
          <GridItem w={'full'} h={300} bg={'gray.500'} border={'1px solid red'} p={2} m={2} />
          <GridItem w={'full'} h={300} bg={'gray.500'} border={'1px solid red'} p={2} m={2}/>
          <GridItem w={'full'} h={300} bg={'gray.500'} border={'1px solid red'} p={2} m={2}/>
      </Grid>
      )}
</>
      )}


export default ProfilePosts
