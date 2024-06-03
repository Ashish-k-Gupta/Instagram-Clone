import { Flex, calc, Box, Spinner } from "@chakra-ui/react"
import Sidebar from "../../Components/Sidebar/Sidebar"
import { useLocation } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import Navbar from "../../Components/Navbar/Navbar";

/* 
insstead of adding the sidebar component to every page, we can add it only once to the pageloyout component and wrap the children with it. 
This way, we can have a sidebar on every page except the AuthPage.
*/

const PageLayout = ({ children }) => {

    const { pathname } = useLocation();
    const [user, loading, error] = useAuthState(auth);
    const canRenderSidebar = pathname !== "/auth" && user;
    const canRenderNavbar = !user && !loading && pathname !== "/auth";

    const checkingUserIsAuth = !user && loading
    if (checkingUserIsAuth) return <PageLayoutSpinner />

    return (
        <Flex flexDir={canRenderNavbar ? "column" : "row"}>
            {/* Sidebar on the Left */}
            {canRenderSidebar ? (
                <Box w={{ base: "70px", md: "240px" }}>
                    <Sidebar />
                </Box>
            ) : null}

            {/* Navbar */}
            {canRenderNavbar ? <Navbar /> : null}
            {/* The page content on the right */}
            <Box flex={1} mx={'auto'}>
                {children}
            </Box>
        </Flex>

    );
};

export default PageLayout;

const PageLayoutSpinner = () => {
    return (
        <Flex flexDir='column' h='100vh' alignItems='center' justifyContent='center'>
            <Spinner size='xl' />
        </Flex>
    )
}