import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Box p={8}>
      <VStack spacing={4} textAlign="center">
        <Heading size="2xl">Bine ai venit la Mini Școala!</Heading>
        <Text fontSize="lg" color="gray.600">
          Platformă de învățare modernă pentru toți.
        </Text>
        <Button colorScheme="teal" size="lg">
          Vezi cursurile
        </Button>
      </VStack>

      <Box mt={10}>
        <Heading size="lg" mb={4}>
          Cursuri populare
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={6}></SimpleGrid>
      </Box>
    </Box>
  );
}
