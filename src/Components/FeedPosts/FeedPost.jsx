import { Box, Image } from "@chakra-ui/react"
import PostHeader from "./PostHeader"
import PostFooter from "./PostFooter"
const FeedPost = () => {
    return (
        <div>
            <PostHeader />
                <Box>
                    <Image src="/img1.png" alt='user profile picture'>

                    </Image>
                </Box>
            <PostFooter />
        </div>
    )
}

export default FeedPost
