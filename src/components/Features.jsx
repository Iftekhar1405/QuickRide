import React, { useState } from 'react';
import { 
  Box, 
  VStack, 
  HStack, 
  Heading, 
  Container, 
  Button, 
  Input, 
  Select, 
  Text,
  Flex,
  Avatar,
  Icon
} from '@chakra-ui/react';
import { FaStar, FaCar, FaShieldAlt, FaQuoteLeft, FaPhoneAlt } from 'react-icons/fa';

const Testimonial = ({ name, quote, avatar }) => (
  <Box 
    bg="white" 
    p={6} 
    borderRadius="xl" 
    boxShadow="md" 
    position="relative"
    maxWidth="350px"
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
    <Heading size="md" mb={2}>{title}</Heading>
    <Text>{description}</Text>
  </Box>
);

const Features = () => {
  const [bookingType, setBookingType] = useState('immediate');
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    name: '',
    phone: '',
    email: '',
    bookingDateTime: '',
    vehicleType: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted', formData);
  };

  return (
    <Box 
      bgImage="url('/api/placeholder/1920/1080')" 
      bgPosition="center" 
      bgRepeat="no-repeat" 
      bgSize="cover"
      minHeight="100vh"
      position="relative"
      pt={20}
    >
      {/* Overlay to improve text readability */}
      <Box 
        position="absolute" 
        top={0} 
        left={0} 
        right={0} 
        bottom={0} 
        bg="blackAlpha.600" 
        zIndex={1}
      />

      <Container maxWidth="container.xl" position="relative" zIndex={2}>
        <Flex 
          direction={{ base: 'column', lg: 'row' }} 
          gap={10} 
          alignItems="stretch"
        >
          {/* Booking Form */}
          <Box 
            bg="white" 
            borderRadius="xl" 
            boxShadow="2xl" 
            p={8} 
            width={{ base: '100%', lg: '450px' }}
          >
            <Heading 
              textAlign="center" 
              mb={6} 
              color="blue.600"
            >
              Book Your Ride
            </Heading>

            <form onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <Input 
                  name="pickupLocation"
                  placeholder="Pickup Location"
                  value={formData.pickupLocation}
                  onChange={handleInputChange}
                />
                <Input 
                  name="dropoffLocation"
                  placeholder="Dropoff Location"
                  value={formData.dropoffLocation}
                  onChange={handleInputChange}
                />
                <Input 
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <Input 
                  name="phone"
                  placeholder="Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <Select 
                  name="vehicleType"
                  placeholder="Select Vehicle Type"
                  value={formData.vehicleType}
                  onChange={handleInputChange}
                >
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="luxury">Luxury</option>
                </Select>
                <Button 
                  colorScheme="blue" 
                  width="full" 
                  type="submit"
                >
                  Book Now
                </Button>
              </VStack>
            </form>
          </Box>

          {/* Features and Testimonials */}
          <VStack spacing={10} align="stretch" flex={1}>
            {/* Features */}
            <HStack 
              spacing={6} 
              justify="center" 
              wrap="wrap"
            >
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

            {/* Testimonials */}
            <HStack 
              spacing={6} 
              justify="center" 
              wrap="wrap"
            >
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

            {/* Contact Information */}
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
                <Text fontWeight="bold" fontSize="lg">24/7 Customer Support</Text>
                <Text>+1 (555) 123-4567</Text>
              </VStack>
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Features;