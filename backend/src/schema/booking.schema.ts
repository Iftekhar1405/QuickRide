import * as mongoose from 'mongoose';

export const BookingSchema = new mongoose.Schema({
  pickupLocation: {
    type: String,
    required: true,
  },
  dropoffLocation: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    match: [/^[0-9]{10}$/, 'Invalid phone number'],
  },
  email: {
    type: String,
    required: true,
    match: [/^\S+@\S+\.\S+$/, 'Invalid email address'],
  },
  bookingDateTime: {
    type: Date,
    default: Date.now,
  },
  vehicleType: {
    type: String,
    enum: ['sedan', 'suv', 'luxury'],
    required: true,
  },
  bookingType: {
    type: String,
    enum: ['immediate', 'scheduled'],
    default: 'immediate',
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export interface Booking extends mongoose.Document {
  pickupLocation: string;
  dropoffLocation: string;
  name: string;
  phone: string;
  email: string;
  bookingDateTime: Date;
  vehicleType: string;
  bookingType: string;
  status: string;
  createdAt: Date;
}
