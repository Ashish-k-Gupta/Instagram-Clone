import { Box, Flex, VStack, Text, Avatar, AvatarGroup, Button } from "@chakra-ui/react"
import useUserProfileStore from "../../store/userProfileStore"

const ProfileHeader = (avatar) => {
  const {userProfile} = useUserProfileStore();



  /* return (
        <Flex flexDirection={'row'} alignItems={'center'} gap={10} justifyContent={'flex-start'} px={0} mx={0}>
          <Box>
          <Avatar></Avatar>

          </Box>
            <VStack>
              <Text fontStyle={'bold'} fontWeight={600} >Ashish Gupta</Text>
              <Flex flexDirection={'row'} gap={5} w={'full'} alignItems={'flex-start'}>
                <Text>Posts</Text>
                <Text>Followers</Text>
                <Text>Following</Text>
              </Flex>
              <Text fontSize={15} color={'white.100'}>Building an Instagram Clone</Text>
            </VStack>
        </Flex>
  ) */

  return (
  <Flex gap={{ base: 4, sm: 10 }} py={10} direction={{ base: "column", sm: 'row' }}>
    <AvatarGroup size={{ base: "xl", md: '2xl' }} justifySelf={"center"} alignSelf={'flex-start'} mx={'auto'}>
      <Avatar  src={userProfile.profilePicURL} alt={'Ashish Gupta'}></Avatar>
    </AvatarGroup>
    <VStack alignItems={'start'} gap={2} mx={'auto'} flex={1}>
      <Flex gap={4} direction={{ base: "column", sm: 'row' }}
        justifyContent={{ base: "center", sm: "flex-start" }}
        alignItems={"center"}
        w={'full'}
      >
        <Text fontSize={{ base: 'sm', md: "lg" }}>{userProfile.username}</Text>
        <Flex gap={4} alignItems={"center"} justifyContent={'center'}>
          <Button bg={'white'} color={'black'} _hover={{ bg: 'whiteAlpha.800' }} size={{ base: 'xs', md: 'sm' }}>Edit Profile</Button>
        </Flex>
      </Flex>

      <Flex alignItems={'center'} gap={{ base: 2, sm: 4 }}>
        <Text fontSize={{ base: 'xs', md: 'sm' }}>
          <Text as={'span'} fontWeight={'bold'} mr={1}>
            {userProfile.posts.length}
            </Text>
          Posts
        </Text>
        <Text fontSize={{ base: 'xs', md: 'sm' }}>
          <Text as={'span'} fontWeight={'bold'} mr={1}>149</Text>
          {userProfile.followers.length}
        </Text>
        <Text fontSize={{ base: 'xs', md: 'sm' }}>
          <Text as={'span'} fontWeight={'bold'} mr={1}>175</Text>
          {userProfile.following.length}
        </Text>
      </Flex>
      <Flex alignItems={'center'} gap={4}>
        <Text fontSize={'sm'} fontWeight={'bold'}>
          {userProfile.fullName}
        </Text>
      </Flex>
      <Text fontSize={'sm'}>{userProfile.bio}</Text>
    </VStack>

  </Flex>
  )
}

export default ProfileHeader
