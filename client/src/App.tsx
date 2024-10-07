import { ChakraProvider } from "@chakra-ui/react";
import { BaseRoutes } from "@/routes/BaseRoutes";

export function App() {
  return (
    <ChakraProvider>
      <BaseRoutes />
    </ChakraProvider>
  );
}
