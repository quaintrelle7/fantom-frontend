import { Grid, Box, Heading, Flex, Link } from '@chakra-ui/react';
import React from 'react';
import MarketplaceItem from './MarketplaceItem';

type MarketplaceProps = {


};

const Marketplace: React.FC<MarketplaceProps> = () => {

    return (
        <>
            <Flex p={4} justifyContent={"flex-end"} bgColor={"black"} >
                <Link href="/" color={"white"}>Back to Home</Link>
            </Flex>
            <Box bgColor={"black"} p={20}>

                <Heading mt={-10} color={"brand.100"}>Buy Carbon & Forest Credits</Heading>
                <Grid mt={5} bgColor={"black"} templateColumns={{
                    base: 'repeat(1, 1fr)',
                    md: 'repeat(2, 1fr)',
                    lg: 'repeat(5, 1fr)'
                }} gap={{ base: 6, md: 8, lg: 10 }} alignItems={"center"} py={6} >

                    <Link href='/Marketplace/Buy'> <MarketplaceItem /></Link>
                    <MarketplaceItem />
                    <MarketplaceItem />
                    <MarketplaceItem />

                </Grid>
            </Box>
        </>
    )
}
export default Marketplace;