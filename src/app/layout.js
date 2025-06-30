"use client";
import { useEffect } from "react";
import { ChakraProvider, Flex, Box } from "@chakra-ui/react";
import theme from "@/theme";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export default function RootLayout({ children }) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      const now = new Date();
      const day = now.getDate();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = String(now.getFullYear()).slice(-2);
      document.title = `🔧 dev.${day}.${month}.${year}`;
    } else {
      document.title = "MiniScoala";
    }
  }, []);

  return (
    <html lang="ro" suppressHydrationWarning={true}>
      <body style={{ margin: 0 }}>
        <ChakraProvider theme={theme}>
          <Flex direction="column" minH="100vh">
            <Header />
            {process.env.NODE_ENV === "development" && (
              <Box
                position="fixed"
                bottom="10px"
                right="10px"
                bg="red.500"
                color="white"
                px={3}
                py={1}
                fontSize="sm"
                borderRadius="md"
                zIndex="9999"
                boxShadow="md"
              >
                {`🔧 dev.${new Date().getDate()}.${String(
                  new Date().getMonth() + 1
                ).padStart(2, "0")}.${String(new Date().getFullYear()).slice(
                  -2
                )}`}
              </Box>
            )}

            <Box as="main" flex="1">
              {children}
            </Box>
            <Footer />
          </Flex>
        </ChakraProvider>
      </body>
    </html>
  );
}
