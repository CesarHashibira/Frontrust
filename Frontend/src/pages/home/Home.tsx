import React from 'react';
import { Card, CardBody, Image, Stack, Text, Heading, Button, Center, Badge, useColorModeValue } from '@chakra-ui/react';

function Home() {
  const kWCount = 25.5;
  const ethCount = 0.005;

  const handleWallet = () => {
    console.log('Wallet clicked');
  };

  const handleCheckFNT = () => {
    console.log('Revisar NFT clicked');
  };

  const handleCheckBalance = () => {
    console.log('Check Balance clicked');
  };

  const buttonBgColor = useColorModeValue('#1A1A1A', '#1A1A1A');
  const buttonHoverBgColor = useColorModeValue('#333333', '#333333');

  return (
    <Center>
      <Card
        h="500px"
        w="1081px"
        backgroundColor="black"
        direction={{ base: 'column', sm: 'row' }}
        style={{ boxShadow: '2px 6px 8px rgba(0, 0, 0, 0.5)' }}
        overflow='hidden'
        borderRadius={20}
        boxShadow="md"
        p={8}
      >
        <Stack spacing={7} ml={{ base: 0, sm: 4 }} textAlign="center" width="100%" maxWidth="1000px" mx="auto">
          <CardBody>
            <Heading size='lg' color="#00C595" textShadow="1px 1px 2px black" fontWeight="bold" borderRadius={20}>
              Overview Panel
            </Heading>
            <Text py='5' color="white" textShadow="1px 1px 2px black" style={{ boxShadow: '2px 6px 8px rgba(0, 0, 0, 0.5)' }}>
              Check how much energy apolo produces and see how much PT do you have
            </Text>
            <Image
              mx="auto"
              h="200px"
              w="350px"

              src="./img/lgb.png"
              borderRadius="md"
            />
            <Stack direction="row" justifyContent="space-between">
              <Badge colorScheme="yellow" width="150px">
                kWh: {kWCount.toFixed(2)}
              </Badge>
              <Badge colorScheme="purple" width="150px" >
                ETH: {ethCount.toFixed(4)}
              </Badge>
            </Stack>


          </CardBody>

          <Stack direction="row" justifyContent="space-between">
            <Button
              style={{ boxShadow: '2px 6px 8px rgba(0, 0, 0, 0.5)' }}
              variant='solid'
              colorScheme='teal'
              fontWeight="bold"
              color="white"
              _hover={{ bg: buttonHoverBgColor, transform: 'scale(1.05)' }}
              onClick={handleWallet}
              width="150px"
            >
              Wallet
            </Button>
            <Button
              style={{ boxShadow: '2px 6px 8px rgba(0, 0, 0, 0.5)' }}
              variant='solid'
              colorScheme='teal'
              color="white"
              fontWeight="bold"
              _hover={{ bg: buttonHoverBgColor, transform: 'scale(1.05)' }}
              onClick={handleCheckFNT}
              width="150px"
            >
              Cobrar nft
            </Button>
            <Button
              style={{ boxShadow: '2px 6px 8px rgba(0, 0, 0, 0.5)' }}
              variant='solid'
              colorScheme='teal'
              fontWeight="bold"
              color="white"
              _hover={{ bg: buttonHoverBgColor, transform: 'scale(1.05)' }}
              onClick={handleCheckBalance}
              width="150px"
            >
              Check Balance
            </Button>
          </Stack>
        </Stack>
      </Card>
    </Center>
  );
}

export { Home };
