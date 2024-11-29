import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsEnum,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class CreateBookingDto {
  @IsString()
  pickupLocation: string;

  @IsString()
  dropoffLocation: string;

  @IsString()
  name: string;

  @IsPhoneNumber('IN')
  phone: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  bookingDateTime?: Date;

  @IsEnum(['sedan', 'suv', 'luxury'])
  vehicleType: string;

  @IsEnum(['immediate', 'scheduled'])
  @IsOptional()
  bookingType?: string;
}
