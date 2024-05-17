import { VStack } from "@chakra-ui/react"
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from "./SuggestedUser"

const SuggestedUsers = () => {
  return (
        <VStack py={8} px={6} gap={4}>
            <SuggestedHeader />
            <SuggestedUser />
            <SuggestedUser />
            <SuggestedUser />
            <SuggestedUser />
        </VStack>      
  )
}

export default SuggestedUsers
