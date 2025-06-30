// src/components/Layout/Footer.jsx
"use client";
import { Box, Container, Stack, Text, Link, Divider } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer" bg="gray.100" color="gray.700" py={6} mt={12}>
      <Container maxW="container.lg">
        <Stack spacing={4} align="center">
          <Divider />

          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={6}
            align="center"
            justify="center"
          >
            <Link href="/about">Despre</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/terms">Termeni</Link>
            <Link href="/privacy">Politica GDPR</Link>
          </Stack>

          <Text fontSize="sm" textAlign="center">
            © {new Date().getFullYear()} MiniȘcoala. Toate drepturile rezervate.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
