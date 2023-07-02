import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, Radio, RadioGroup, Stack, Center, Box, FormLabel, Textarea, Text, Input } from '@chakra-ui/react';
import React, { useState } from 'react';

type ProfileFormProps = {


};

type UserType = {
    regularUser: boolean;
    carbonUser: boolean;
    forestUser: boolean;
};

const ProfileForm: React.FC<ProfileFormProps> = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [user, setUser] = useState<String>(
        ""
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

    }

    const handleUserChange = (e: any) => {
        setUser(e.target.value);
        console.log(user);
    }

    const [value, setValue] = React.useState('1')

    const btnRef = React.useRef(null)
    return (
        <>
            {/* <RadioGroup value={user as string} onChange={handleUserChange}>

                <Stack direction='row'>
                    <Radio value='regularUser'>Regular buyer</Radio>
                    <Radio value='companyUser'>Carbon Credits Seller</Radio>
                    <Radio value='forestUser'>Forest Credits Seller</Radio>

                    
                </Stack>

            </RadioGroup> */}




            <Stack>
                <Text fontWeight={"700"} fontSize={"20"}>
                    Select the User Type & Sign Up
                </Text>
                <Box ml={10} >


                    {/* <RadioGroup onChange={setValue} value={value}>
                        <Stack direction='row'>
                            <Radio value='1'>First</Radio>
                            <Radio value='2'>Second</Radio>
                            <Radio value='3'>Third</Radio>
                        </Stack>
                    </RadioGroup> */}

                    <label>
                        <input type="radio" value="" checked={user == "regularUser"} onChange={handleUserChange} />
                        Regular Buyer/Seller
                    </label>
                    <br />
                    <label>
                        <input type="radio" value="carbonUser" checked={user == "carbonUser"} onChange={handleUserChange} />
                        Carbon Credits Seller
                    </label>
                    <br />

                    <label>
                        <input type="radio" value="forestUser" checked={user == "forestUser"} onChange={handleUserChange} />
                        Forest Credits Seller
                    </label>

                </Box>

                <Button mt={3} ref={btnRef} onClick={onOpen}>
                    Sign Up
                </Button>
            </Stack>

            <Modal
                onClose={onClose}
                finalFocusRef={btnRef}
                isOpen={isOpen}

            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader ml={"20%"} mt={5}>{user == "carbonUser" ? "Sell Carbon Credits" : "Sell Forest Credits"}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box p={1} mt={5}>

                            <form onSubmit={handleSubmit}>
                                <FormLabel fontWeight={800}>Project Name</FormLabel>
                                <Input type='text' name='projectName' />
                                <FormLabel fontWeight={800}>Describe the Project</FormLabel>
                                <Textarea
                                    mb={7}
                                    name='description'
                                    // value={message}
                                    // onChange={(e) => {
                                    //     setMessage(e.target.value);
                                    // }}
                                    ref={initialRef} placeholder='' />

                                <FormLabel fontWeight={800}>No. Of Tokens</FormLabel>
                                <Input
                                    name='noOfTokens' type='number'
                                    ref={initialRef} placeholder='' />

                                <FormLabel fontWeight={800}>Owner Name</FormLabel>
                                <Input
                                    name='ownerName' type='text'
                                    ref={initialRef} placeholder='' />

                                <Button ml={"40%"} mt={5} background={"brand.200"} type='submit'>Sign Up</Button>
                            </form>
                        </Box>

                    </ModalBody>
                    <ModalFooter>
                        {/* <Button onClick={onClose}>Close</Button> */}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default ProfileForm;