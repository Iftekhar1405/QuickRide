import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookingDto } from '../DTO/booking.dto';
import { Booking } from '../schema/booking.schema';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel('Booking') private readonly bookingModel: Model<Booking>,
  ) {}

  async createBooking(createBookingDto: CreateBookingDto): Promise<Booking> {
    const newBooking = new this.bookingModel({
      ...createBookingDto,
      status: 'pending',
      createdAt: new Date(),
    });
    return await newBooking.save();
  }

  async getAllBookings(): Promise<Booking[]> {
    return await this.bookingModel.find().exec();
  }

  async getBookingById(id: string): Promise<Booking> {
    const booking = await this.bookingModel.findById(id).exec();
    if (!booking) {
      throw new NotFoundException('Booking not found');
    }
    return booking;
  }

  async updateBookingStatus(id: string, status: string): Promise<Booking> {
    const booking = await this.bookingModel
      .findByIdAndUpdate(id, { status }, { new: true })
      .exec();

    if (!booking) {
      throw new NotFoundException('Booking not found');
    }

    return booking;
  }

  async deleteBooking(id: string): Promise<void> {
    const result = await this.bookingModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Booking not found');
    }
  }
}
