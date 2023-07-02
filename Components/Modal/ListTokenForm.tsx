import React from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, Radio, RadioGroup, Stack, Center, Box, FormLabel, Textarea, Text, Input } from '@chakra-ui/react';

type ListTokenFormProps = {

};

const ListTokenForm: React.FC<ListTokenFormProps> = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

    }





    const btnRef = React.useRef(null)
    return (
<>
         <Button  width={"100px"}onClick={onOpen}>List Tokens</Button>

        <Modal
            onClose={onClose}
            finalFocusRef={btnRef}
            isOpen={isOpen}

        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader ml={"20%"} mt={5}>List Tokens to Marketplace</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box p={1} mt={5}>

                        <form onSubmit={handleSubmit}>

                            <FormLabel fontWeight={800}>No. Of Tokens</FormLabel>
                            <Input
                                name='noOfTokens' type='number'
                                ref={initialRef} placeholder='' />



                            <Button ml={"40%"} mt={5} background={"brand.200"} type='submit'>Sign Up</Button>
                        </form>
                    </Box>

                </ModalBody>
                <ModalFooter>
                   
                </ModalFooter>
            </ModalContent>
        </Modal>

        </>
    )
}
    export default ListTokenForm;