import React from 'react';
import { Box, Button, Flex, Icon, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Center, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import Navbar from '../../Components/Navbar/Navbar';


type CompanyProfileProps = {

};

const CompanyProfile: React.FC<CompanyProfileProps> = () => {

    return (
        <>
            {/* Add layout Component */}

            <Navbar />
            <Box bg="black" >
                <Box mx="5%" borderRadius={"10"} width="90%" >
                    <Tabs isFitted variant='enclosed'>
                        <TabList borderTopRadius="10" bg={"brand.100"} color={"black"} >
                            <Tab>Profile</Tab>
                            <Tab>Mint Tokens</Tab>
                            <Tab>Available Tokens</Tab>
                        </TabList>
                        <TabPanels borderBottomRadius="10" border={"1px white solid"} color={"white"}>
                            <TabPanel>
                                <Box>

                                </Box>
                            </TabPanel>
                            <TabPanel>
                                <p>two!</p>
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
                        </TabPanels>
                    </Tabs>
                </Box>

            </Box>
        </>
    )
}
export default CompanyProfile;