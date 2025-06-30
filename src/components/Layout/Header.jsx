"use client";
import { Box, Flex, Heading, HStack, Button, Spacer } from "@chakra-ui/react";
import Link from "next/link";

export default function Header() {
  return (
    <Box as="header" bg="teal.500" color="white" py={4} px={6} shadow="md">
      <Flex align="center">
        <Heading size="md">
          <Link href="/">MiniȘcoala</Link>
        </Heading>

        <Spacer />

        <HStack spacing={4}>
          <Link href="/pricing">
            <Button variant="ghost" color="white" _hover={{ bg: "teal.600" }}>
              Planuri
            </Button>
          </Link>

          <Link href="/auth/login">
            <Button variant="outline" color="white" _hover={{ bg: "teal.600" }}>
              Login
            </Button>
          </Link>

          <Link href="/auth/register">
            <Button colorScheme="whiteAlpha">Înregistrează-te</Button>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}
