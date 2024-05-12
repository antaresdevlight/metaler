import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Image,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

function ProductCard(props: {
  name: string;
  description: string;
  image: string;
}) {
  const { name, description, image } = props;

  return (
    <Card maxW={{ base: "280px", md: "320px" }}>
      <CardBody>
        <Image
          src={image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          w={{ base: "240px", md: "280px" }}
          h={{ base: "160px", md: "187px" }}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text>{description}</Text>
          {/* <Text color="blue.600" fontSize="2xl">
            $450
          </Text> */}
        </Stack>
      </CardBody>
      {/* <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter> */}
    </Card>
  );
}

export default ProductCard;
