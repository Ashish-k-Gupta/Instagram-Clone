import { Container, Flex, Grid, GridItem, Skeleton, VStack, Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import ProfilePost from '../../Components/Profile/ProfilePost'

const ProfilePosts = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>{
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }, [])


  return (
    <Grid
    templateColumns={{
      sm: 'repeat(1, 1fr)',
      md: 'repeat(3, 1fr)'
    }}
    gap={1}
    column={1}
    >
      {isLoading &&
      [0,1,2,3,4,5].map((_, idx) =>(
        <VStack key={idx} alignItems={'flex-start'} gap={4}>
            <Skeleton w={'full'}>
                <Box h={'300px'}>Contents Wrapped</Box>
            </Skeleton>
            </VStack>
      ))}




      {!isLoading && (
         <>
        <ProfilePost img="/img2.png"/>
        <ProfilePost img="/img3.png"/>
        <ProfilePost img="/img01.png"/>
        <ProfilePost img="/img04.png"/>
        </>
      
      )}
</Grid> 

      )}


export default ProfilePosts
