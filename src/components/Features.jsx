import {
  Avatar,
  Box,
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
  <Box bg="white" p={6} borderRadius="xl" boxShadow="md" m={10}>
    <Icon
      as={FaQuoteLeft}
      top={4}
      left={4}
      color="blue.500"
      fontSize="3xl"
      opacity={0.3}
    />
    <Text mb={4} fontStyle="italic">
      "{quote}"
    </Text>
    <Flex align="center">
      <Avatar src={avatar} mr={4} />
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
    bg="white"
    p={6}
    borderRadius="xl"
    boxShadow="md"
    textAlign="center"
    maxWidth="250px"
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
    </>
  );
};

export default Features;
