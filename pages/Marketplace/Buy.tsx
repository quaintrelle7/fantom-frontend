import { Box, Button, Center, Text } from '@chakra-ui/react';
import React from 'react';

type BuyProps = {

};

//Dynamic Routing

const Buy: React.FC<BuyProps> = () => {

    return (
        <>
            <Center bg={"black"} mt={"10"} color={"black"}>
                <Box p={10} borderRadius={10} bg={"brand.50"} width={"400px"}>
                    <Text> Image</Text>
                    <Text>Name of the Company</Text>
                    <Text>Price of the Token</Text>
                    <Center>
                        <Button mt={5} type="submit" onClick={() => { }}>Buy Tokens</Button>
                    </Center>

                </Box>
            </Center>
        </>
    )
}
export default Buy;