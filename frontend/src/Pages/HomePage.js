import React from 'react'
import '../App.css'
import {
    Box,
    Container,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
} from "@chakra-ui/react";
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';

const HomePage = () => {
    return (
        <div className='home'>
            <Container display='flex' marginTop='35px' maxW="xl" centerContent>
                <Box bg="#121212" w="100%" p={4} color='white' borderRadius="xl" boxShadow='0px 0px 10px #7e35c7' border='1px solid #d000fe'>
                    <Text fontSize="6xl" marginBottom='10px' color='white' fontFamily="Lobster" d="flex"
                        justifyContent="center" textAlign='center'>
                        Connect.io
                    </Text>
                    <Tabs isFitted variant="soft-rounded" colorScheme='purple'>
                        <TabList mb="1em">
                            <Tab>Login</Tab>
                            <Tab>Sign Up</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Login />
                            </TabPanel>
                            <TabPanel>
                                <Signup />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Container >
        </div>
    )
}

export default HomePage