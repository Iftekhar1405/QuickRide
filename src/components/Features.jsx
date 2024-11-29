import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import {
  FaCar,
  FaPhoneAlt,
  FaQuoteLeft,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";

const Testimonial = ({ name, quote, avatar }) => (
  <Box
    bg="gray"
    p={8}
    borderRadius="xl"
    boxShadow="md"
    // position="relative"
    // maxWidth="350px"
    height={"md"}
    width={"md"}
  >
    <Icon
      as={FaQuoteLeft}
      position="absolute"
      top={4}
      left={4}
      color="blue.500"
      fontSize="3xl"
      opacity={0.3}
    />
    <Text mb={4} fontStyle="italic">
      "{quote}"
    </Text>
    <Flex align="center" p={12}>
      {/* <Avatar src={avatar} mr={4} /> */}
      <VStack align="start" spacing={0}>
        <Text fontWeight="bold">{name}</Text>
        <HStack spacing={1} color="yellow.400">
          {[...Array(5)].map((_, i) => (
            <Icon key={i} as={FaStar} />
          ))}
        </HStack>
      </VStack>
    </Flex>
  </Box>
);

const FeatureCard = ({ icon, title, description }) => (
  <Box
    bg="blue.100"
    p={12}
    borderRadius="xl"
    boxShadow="md"
    textAlign="center"
    m={50}
  >
    <Icon as={icon} fontSize="4xl" color="blue.500" mb={4} />
    <Heading size="md" mb={2}>
      {title}
    </Heading>
    <Text>{description}</Text>
  </Box>
);

const Features = () => {
  return (
    <>
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="blackAlpha.600"
        zIndex={1}
      />

      <Container position="relative" zIndex={2}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={10}
          alignItems="stretch"
        >
          <VStack spacing={10} align="stretch" flex={1}>
            <HStack spacing={6} justify="center" wrap="wrap">
              <FeatureCard
                icon={FaCar}
                title="Wide Range of Vehicles"
                description="From economical to luxury, we have it all."
              />
              <FeatureCard
                icon={FaShieldAlt}
                title="100% Safe & Secure"
                description="Your safety is our top priority."
              />
            </HStack>

            <HStack spacing={6} justify="center" wrap="wrap">
              <Testimonial
                name="John Doe"
                quote="Amazing service! Always on time and professional."
                avatar="/api/placeholder/100/100"
              />
              <Testimonial
                name="Jane Smith"
                quote="The most reliable taxi service in the city."
                avatar="/api/placeholder/100/100"
              />
            </HStack>

            <Flex
              bg="white"
              p={6}
              borderRadius="xl"
              boxShadow="md"
              align="center"
              justify="center"
            >
              <Icon as={FaPhoneAlt} mr={4} color="blue.500" fontSize="2xl" />
              <VStack align="start" spacing={1}>
                <Text fontWeight="bold" fontSize="lg">
                  24/7 Customer Support
                </Text>
                <Text>+91 9977079639</Text>
              </VStack>
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </>
  );
};

export default Features;
