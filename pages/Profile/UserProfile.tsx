import React from 'react';
import { Box, Button, Flex, Icon, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Center, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, Stack } from '@chakra-ui/react';
import Navbar from '../../Components/Navbar/Navbar';
import Link from 'next/link';
import ListTokenForm from '../../Components/Modal/ListTokenForm';



type UserProfileProps = {

};

const UserProfile: React.FC<UserProfileProps> = () => {

    return (
        <>
            {/* Add layout Component */}

            <Navbar />
            <Box bg="black" >
                <Box mx="5%" borderRadius={"10"} width="90%">
                    <Tabs isFitted variant='enclosed'>
                        <TabList borderTopRadius="10" bg={"brand.100"} color={"black"} >
                            <Tab>Profile</Tab>
                            <Tab>Available Tokens</Tab>
                            <Tab>Listed Tokens</Tab>
                        </TabList>
                        <TabPanels borderBottomRadius="10" border={"1px white solid"} color={"white"}>
                            <TabPanel>
                                <Box>
                                    <Text>Public Key : </Text>
                                    <Text>Email : </Text>
                                    <Text>Name : </Text>
                                    <Text>Balance : </Text>
                                    <Text>Verifier ID : </Text>
                                    <Text>Chain ID : </Text>
                                </Box>
                            </TabPanel>
                            <TabPanel>
                                <TableContainer>
                                    <Table variant='simple'>
                                        <TableCaption>Carbon and Forest Available Tokens</TableCaption>
                                        <Thead >
                                            <Tr >
                                                <Th color={"white"}>Token Type</Th>
                                                <Th color={"white"}>Count </Th>
                                                <Th color={"white"}> List</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            <Tr>
                                                <Td>Carbon</Td>
                                                <Td>100</Td>
                                                <Td >List</Td>
                                            </Tr>
                                            <Tr bg={"whiteAlpha.300"}>
                                                <Td>Forest</Td>
                                                <Td>100</Td>
                                                <Td >List</Td>
                                            </Tr>


                                        </Tbody>
                                        {/* <Tfoot>
                                            <Tr>
                                                <Th>To convert</Th>
                                                <Th>into</Th>
                                                <Th isNumeric>multiply by</Th>
                                            </Tr>
                                        </Tfoot> */}
                                    </Table>
                                </TableContainer>
                            </TabPanel>

                            <TabPanel>
                                <Center>
                                    <Stack>
                                        <Text>To list your tokens on marketplace, click below!</Text>

                                        <Center my={5}>
                                            <ListTokenForm />
                                        </Center>
                                    </Stack>
                                </Center>


                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>

            </Box>
        </>
    )
}
export default UserProfile;