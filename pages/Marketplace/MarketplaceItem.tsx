import { GridItem, Box, Button, Image, Stack, Center, Link, Text, Heading } from '@chakra-ui/react'; import React from 'react';

type MarketplaceItemProps = {

};

const MarketplaceItem: React.FC<MarketplaceItemProps> = () => {

    return (

        <GridItem height={"200px"} alignItems={"center"} width={{ base: "80vw", sm: "70vw", md: "300px", lg: "300px" }} borderRadius={"15px"}

            boxShadow="0 1.8px 1px #2aaa8a,
  0 2px 2px #2aaa8a,
  0 2px 2px #2aaa8a,
  0 0px 6.9px #2aaa8a,
  0 1.8px 10.4px #2aaa8a,
  0 1px 1px #2aaa8a" >

            <Image width={{ base: "80vw", sm: "70vw", md: "300px", lg: "300px" }} height={"200px"} alt={"image"} position="absolute"
                borderRadius={"15px"}

                src="https://plus.unsplash.com/premium_photo-1674586934147-3b0af76655d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80" />

            <Center width={{ base: "80vw", sm: "70vw", md: "300px", lg: "300px" }} height={"200px"} position={"absolute"} >
                <Heading color={"white"} fontSize={['2xl', '30px', '30px', '30px']} overflowWrap={"break-word"}>{"Project title"}</Heading>

            </Center>


            <Center position="relative" height={"200px"} opacity={0} alignItems={"center"} bg={"Red"} borderRadius={"15px"} _hover={{ opacity: "100", bg: "brand.100" }} transition={"0.45s ease-in-out"} >
                <Stack alignItems={"center"} fontWeight={700} >
                    <Text align={"center"} color={"black"}>{"subtitle"}</Text>

                    <Link href={"link as string"} target='_blank'><Button>Visit here</Button></Link>
                </Stack>

            </Center>



        </GridItem>


    )
}
export default MarketplaceItem;