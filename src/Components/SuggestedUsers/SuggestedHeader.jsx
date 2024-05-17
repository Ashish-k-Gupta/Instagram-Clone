 import { Avatar, Flex, Text, textDecoration, Link } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink} from 'react-router-dom'
 
 const SuggestedHeader = () => {
   return (
        <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
            <Flex alignItems={'center'} gap={2}>
            <Avatar name='Ashish Gupta' size={'sm'} src='/profilepic.png' />
                <Text fontSize={12} fontWeight={"bold"}>
                    Ashish Gupta
                </Text>
        </Flex>       
            <Link
            as={RouterLink}
            to={'/auth'}
            fontSize ={14}
            fontWeight={"medium"}
            color={"blue.400"}
            cursor={"pointer"}
            style={{textDecoration: 'none'}}
            _hover={{color: 'white', fontWeight: "600"}}
            >Log out</Link>
        </Flex>       
   )
 }
 
 export default SuggestedHeader
 