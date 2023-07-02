import { Button, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

type NavbarProps = {

};

const Navbar: React.FC<NavbarProps> = () => {

    return <div style={{ position: "sticky", top: "0", zIndex: 1 }}>
        <Flex p={4} justifyContent={"flex-end"} background={"black"} color={"white"}>
            <Text marginRight={5}> 0X0000000000</Text>
            <Link href="/Marketplace" >Go to MarketPlace</Link>
            <Link href="/Profile/UserProfile" >My Profile</Link>
            <Button mx={5} variant="oauth" _hover={{ color: "black", background:"white" }}>Log Out</Button>
        </Flex>

    </div>
}
export default Navbar;