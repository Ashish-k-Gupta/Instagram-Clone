import {Box, Flex, Text} from '@chakra-ui/react'
import { ReelsIcon } from '../../assets/constants';
import {BsGrid3X3} from 'react-icons/bs'
import { PiBookmarkSimple, PiHeartStraight  } from "react-icons/pi";

const ProfileTabs = () => {
  return (
    <Flex w={'full'}
    justifyContent={'center'}
    gap={{base: 4, sm: 10}}
    textTransform={'uppercase'}
    fontWeight={'bold'}
    >
      <Flex borderTop={"1px solid white"} alignItems={'center'} p={3} gap={1} cursor={'pointer'}>
        <Box fontSize={20}>
          <BsGrid3X3/>
        </Box>
        <Text fontSize={12} display={{base: "none", sm: "block  "}}>Posts</Text>
      </Flex>

      <Flex alignItems={'center'} p={2} gap={1} cursor={'pointer'}>
        <Box fontSize={25}>
           <ReelsIcon/>
        </Box>
        <Text fontSize={12} display={{base: "none", sm: "block  "}}>Reels</Text>
      </Flex>

      <Flex alignItems={'center'} p={2} gap={1} cursor={'pointer'}>
        <Box fontSize={25}>
           <PiBookmarkSimple />
        </Box>
        <Text fontSize={12} display={{base: "none", sm: "block  "}}>Saved</Text>
      </Flex>

      <Flex alignItems={'center'} p={3} gap={1} cursor={'pointer'}>
        <Box fontSize={25}>
          <PiHeartStraight />
        </Box>
        <Text fontSize={12} display={{base: "none", sm: "block  "}}>Likes</Text>
      </Flex>

      

    </Flex>
  )
}

export default ProfileTabs
