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
        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
            <Heading fontSize="xl">React pentru Începători</Heading>
            <Text mt={2}>
              Învață bazele React și construiește aplicații moderne.
            </Text>
            <Button mt={4} colorScheme="teal" size="sm">
              Detalii
            </Button>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
            <Heading fontSize="xl">JavaScript Esențial</Heading>
            <Text mt={2}>Stăpânește JavaScript-ul de la zero la avansat.</Text>
            <Button mt={4} colorScheme="teal" size="sm">
              Detalii
            </Button>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
            <Heading fontSize="xl">Python pentru Toți</Heading>
            <Text mt={2}>
              Descoperă programarea cu Python într-un mod practic.
            </Text>
            <Button mt={4} colorScheme="teal" size="sm">
              Detalii
            </Button>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Features Section */}
      <Box mt={16} mb={10}>
        <Heading size="lg" mb={4} textAlign="center">
          De ce să alegi Mini Școala?
        </Heading>
        <SimpleGrid columns={[1, 3, 3]} spacing={8}>
          <Box p={6} bg="gray.50" borderRadius="lg" shadow="sm">
            <Heading size="md" mb={2}>
              Cursuri Interactive
            </Heading>
            <Text>
              Exerciții practice și proiecte reale pentru o învățare eficientă.
            </Text>
          </Box>
          <Box p={6} bg="gray.50" borderRadius="lg" shadow="sm">
            <Heading size="md" mb={2}>
              Mentori Experți
            </Heading>
            <Text>
              Îndrumare de la profesioniști cu experiență în industrie.
            </Text>
          </Box>
          <Box p={6} bg="gray.50" borderRadius="lg" shadow="sm">
            <Heading size="md" mb={2}>
              Comunitate Activă
            </Heading>
            <Text>
              Alătură-te unei comunități de cursanți și mentori pasionați.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Testimonials Section */}
      <Box mt={16} mb={10}>
        <Heading size="lg" mb={4} textAlign="center">
          Ce spun cursanții noștri
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          <Box p={5} bg="white" borderRadius="lg" shadow="md" borderWidth="1px">
            <Text fontStyle="italic">
              "Mini Școala m-a ajutat să înțeleg programarea mult mai ușor!"
            </Text>
            <Text mt={2} fontWeight="bold">
              - Andrei
            </Text>
          </Box>
          <Box p={5} bg="white" borderRadius="lg" shadow="md" borderWidth="1px">
            <Text fontStyle="italic">
              "Cursurile sunt foarte bine structurate și ușor de urmărit."
            </Text>
            <Text mt={2} fontWeight="bold">
              - Maria
            </Text>
          </Box>
          <Box p={5} bg="white" borderRadius="lg" shadow="md" borderWidth="1px">
            <Text fontStyle="italic">
              "Recomand tuturor celor care vor să învețe rapid și eficient."
            </Text>
            <Text mt={2} fontWeight="bold">
              - Vlad
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Newsletter Signup Section */}
      <Box mt={16} mb={10} textAlign="center">
        <Heading size="md" mb={2}>
          Abonează-te la newsletter
        </Heading>
        <Text mb={4}>
          Primește cele mai noi cursuri și resurse direct pe email.
        </Text>
        <Box as="form" display="inline-flex" gap={2} justifyContent="center">
          <input
            type="email"
            placeholder="Emailul tău"
            style={{
              padding: "8px 12px",
              borderRadius: "6px",
              border: "1px solid #CBD5E0",
              outline: "none",
              fontSize: "1rem",
            }}
          />
          <Button colorScheme="teal" type="submit">
            Abonează-te
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
