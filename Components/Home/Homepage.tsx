import { Button, Center, Heading, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import ProfileForm from '../Modal/ProfileForm';

type HomepageProps = {

};

const Homepage: React.FC<HomepageProps> = () => {

    return (
        <div>

            <Center bg={"black"}>

                <Stack alignItems={"center"}>

                    <Heading mt={150} color={"brand.100"}>Carbon & Forest Credit Exchange</Heading>
                    <Heading fontSize={25} color={"whiteAlpha.600"}>Offset your carbon footprints to create a greener world</Heading>

                    <Center mt={50} p={5} borderRadius={5} background={'brand.50'} width={"400px"}>

                        <ProfileForm />

                        </Center>

                </Stack>

            </Center>

        </div>)
}
export default Homepage;