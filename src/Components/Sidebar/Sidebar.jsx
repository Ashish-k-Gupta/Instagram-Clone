import { Avatar, Box, Flex, Link, Tooltip } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom';
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo } from '../../assets/constants';
import {AiFillHome} from "react-icons/ai";
import { color } from 'framer-motion';

const Sidebar = () => {

  const sidebarItems =[
    {
      icon: <AiFillHome size ={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <searchLogo/>,
      text: "Search",
    },
    {
      icon: <NotificationsLogo/>,
      text: "Notifications"
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      icon: <Avatar size={"sm"} name='Ashish Gupta' src='/profilepic.png' />,
      text: "Profile",
      link: "/asaprogrammer"
    },
  ]

  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlphs.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
      border={"2px solid red"}
    >
      <Flex direction={'column'} gap={10} w={'full'} height={"full"}>

        <Link to={"/"} as={RouterLink} pl={2} display={{ base: "none", md: "block" }} cursor={'pointer'}>
          <InstagramLogo />
        </Link>

        <Link to={"/"} as={RouterLink} p={2} display={{ base: "block", md: "none" }} cursor={'pointer'}
          borderRadius={6}
          _hover={{bg: "whiteAlpha.200"}} w={10}>
          <InstagramMobileLogo />
        </Link>


        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          {sidebarItems.map((item, index) => (
            <Tooltip
            key={index}
            hasArrow
            label ={item.text}
            placement='right'
            ml={1}
            openDelay={500}
            display={{base:'none', md: 'block'}}
            color={'white'}
            >
              <Link
              display={"flex"}
              to={item.link || null}
              as={RouterLink}
              alignItems={"center"}
              gap={4}
              _hover={{bg:"WhiteAlpha.400"}}
              borderRadius={6}
              p={2}
              w={{base:10, md:'full' }}
              >
                {item.icon}
                <Box display={{base: "none", md: "bock"}}>
                  {item.text}
                </Box>

              </Link>
            </Tooltip>
          ))}
        </Flex>

      </Flex>

    </Box>
  )
}

export default Sidebar
