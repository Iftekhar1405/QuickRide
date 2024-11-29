import {
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

const bookingSchema = yup.object().shape({
  pickupLocation: yup.string().required("Pickup location is required"),
  dropoffLocation: yup.string().required("Dropoff location is required"),
  name: yup.string().required("Name is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  bookingDateTime: yup.date().when("bookingType", {
    is: "scheduled",
    then: yup.date().required("Booking date and time is required"),
  }),
});

const sendBookingData = async (data) => {
  try {
    const response = await axios.post("http://localhost:3000/bookings", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Failed to book taxi. Please try again.";
    throw new Error(errorMessage);
  }
};

const BookingForm = ({ bookingType }) => {
  const toast = useToast();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(bookingSchema),
    defaultValues: {
      bookingType: bookingType,
    },
  });

  const onSubmit = async (data) => {
    try {
      const result = await sendBookingData(data);
      console.log("Booking Successful:", result);
      toast({
        title: "Booking Successful",
        description: "Your taxi has been booked!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Booking Failed",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={4}>
        <Controller
          name="pickupLocation"
          control={control}
          render={({ field }) => (
            <FormControl>
              <FormLabel>Pickup Location</FormLabel>
              <Input {...field} placeholder="Enter pickup address" />
              <FormErrorMessage>
                {errors.pickupLocation?.message}
              </FormErrorMessage>
            </FormControl>
          )}
        />

        <Controller
          name="dropoffLocation"
          control={control}
          render={({ field }) => (
            <FormControl isInvalid={errors.dropoffLocation}>
              <FormLabel>Dropoff Location</FormLabel>
              <Input {...field} placeholder="Enter destination address" />
              <FormErrorMessage>
                {errors.dropoffLocation?.message}
              </FormErrorMessage>
            </FormControl>
          )}
        />

        {bookingType === "scheduled" && (
          <Controller
            name="bookingDateTime"
            control={control}
            render={({ field }) => (
              <FormControl isInvalid={errors.bookingDateTime}>
                <FormLabel>Booking Date & Time</FormLabel>
                <Input {...field} type="datetime-local" />
                <FormErrorMessage>
                  {errors.bookingDateTime?.message}
                </FormErrorMessage>
              </FormControl>
            )}
          />
        )}

        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <FormControl isInvalid={errors.name}>
              <FormLabel>Full Name</FormLabel>
              <Input {...field} placeholder="Your full name" />
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            </FormControl>
          )}
        />

        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <FormControl isInvalid={errors.phone}>
              <FormLabel>Phone Number</FormLabel>
              <Input
                {...field}
                type="tel"
                placeholder="10 digit phone number"
              />
              <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
            </FormControl>
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <FormControl isInvalid={errors.email}>
              <FormLabel>Email</FormLabel>
              <Input {...field} type="email" placeholder="Your email address" />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
          )}
        />

        <Controller
          name="vehicleType"
          control={control}
          render={({ field }) => (
            <FormControl>
              <FormLabel>Vehicle Type</FormLabel>
              <Select {...field} placeholder="Select vehicle type">
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="luxury">Luxury</option>
              </Select>
            </FormControl>
          )}
        />

        <Controller
          name="termsAccepted"
          control={control}
          render={({ field }) => (
            <FormControl>
              <Checkbox {...field} isChecked={field.value}>
                I accept the terms and conditions
              </Checkbox>
            </FormControl>
          )}
        />

        <Button
          colorScheme="blue"
          type="submit"
          width="full"
          isLoading={isSubmitting}
        >
          Book Taxi
        </Button>
      </VStack>
    </form>
  );
};

export default BookingForm;
