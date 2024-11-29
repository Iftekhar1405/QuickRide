import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateBookingDto } from '../DTO/booking.dto';
import { Booking } from '../schema/booking.schema';
import { BookingService } from './booking.service';

@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async createBooking(
    @Body() createBookingDto: CreateBookingDto,
  ): Promise<Booking> {
    return await this.bookingService.createBooking(createBookingDto);
  }

  @Get()
  async getAllBookings(): Promise<Booking[]> {
    return await this.bookingService.getAllBookings();
  }

  @Get(':id')
  async getBookingById(@Param('id') id: string): Promise<Booking> {
    return await this.bookingService.getBookingById(id);
  }

  @Put(':id/status')
  async updateBookingStatus(
    @Param('id') id: string,
    @Body('status') status: string,
  ): Promise<Booking> {
    return await this.bookingService.updateBookingStatus(id, status);
  }

  @Delete(':id')
  async deleteBooking(@Param('id') id: string): Promise<void> {
    return await this.bookingService.deleteBooking(id);
  }
}
