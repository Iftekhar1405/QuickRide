import {
  Box,
  ChakraProvider,
  Container,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  extendTheme,
} from "@chakra-ui/react";
import { useState } from "react";
import BookingForm from "./BookingForm";

// Custom theme for a more elegant look
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.50",
      },
    },
  },
  components: {
    Form: {
      baseStyle: {
        container: {
          bg: "white",
          boxShadow: "md",
          borderRadius: "lg",
          p: 6,
        },
      },
    },
  },
});

const MainForm = () => {
  const [bookingType, setBookingType] = useState("immediate");

  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.md" py={10}>
        <Box bg="white" borderRadius="xl" boxShadow="2xl" p={8}>
          <Heading textAlign="center" mb={6} color="blue.600">
            QuickRide Taxi Booking
          </Heading>

          <Tabs
            isFitted
            variant="soft-rounded"
            colorScheme="blue"
            onChange={(index) =>
              setBookingType(index === 0 ? "immediate" : "scheduled")
            }
          >
            <TabList mb={6}>
              <Tab>Immediate Booking</Tab>
              <Tab>Schedule Booking</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <BookingForm bookingType="immediate" />
              </TabPanel>
              <TabPanel>
                <BookingForm bookingType="scheduled" />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </ChakraProvider>
  );
};

export default MainForm;
