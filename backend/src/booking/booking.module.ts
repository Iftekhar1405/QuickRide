import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookingSchema } from '../schema/booking.schema';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://iftekharahmedxyz:QZazr7KKTdociuOf@enquiry.1qkzf.mongodb.net/?retryWrites=true&w=majority&appName=enquiry',
      {
        serverSelectionTimeoutMS: 5000,
      },
    ),
    MongooseModule.forFeature([{ name: 'Booking', schema: BookingSchema }]),
  ],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
