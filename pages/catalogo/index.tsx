import { Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../src/assets/logo.png"

function catalogo() {
  return (
    <Flex justifyContent="center" alignItems="center" gap="40px" paddingBottom="60px" paddingTop="60px">
       

      <Flex direction="column" justifyContent="center">

      <Image src={logo} width={110} height={50} alt="metaler logo" />
        <Flex direction="column" justifyContent="center">
          <Text fontSize="40px" fontWeight="700">
            Revisa
          </Text>
          <Text fontSize="40px" fontWeight="700">
            Nuestro
          </Text>
          <Text fontSize="40px" fontWeight="700">
            Catalogo
          </Text>
        </Flex>

        <Flex  marginTop="40px" w="450px">
          <Text fontSize="20px">
           Nuestro catalogo cuenta con moldes, noyos y piezas terminadas
          </Text>
        </Flex>

        <Flex marginTop="40px">
          <Button backgroundColor="black" color="white" variant="unstyled" w="220px">
            Descargar Catalogo
          </Button>
        </Flex>
      </Flex>

      <Flex backgroundColor="metaler" borderRadius="12px" w="450px" h="600px"></Flex>
    </Flex>
  );
}

export default catalogo;
