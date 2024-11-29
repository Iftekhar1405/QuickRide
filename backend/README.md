# TaxiBooking Backend Setup

## Prerequisites

- Node.js (v14+)
- MongoDB

## Installation Steps

1. Install dependencies

```bash
npm install @nestjs/core @nestjs/common @nestjs/mongoose mongoose class-validator class-transformer
```

2. MongoDB Configuration

- Ensure MongoDB is running
- Update connection string in BookingModule if needed

## Environment Variables

Create a `.env` file:

```
MONGODB_URI=mongodb://localhost:27017/taxibooking
PORT=3000
```

## Running the Application

```bash
# Development
npm run start:dev

# Production
npm run build
npm run start:prod
```

## API Endpoints

- `POST /bookings`: Create a new booking
- `GET /bookings`: Get all bookings
- `GET /bookings/:id`: Get specific booking
- `PUT /bookings/:id/status`: Update booking status
- `DELETE /bookings/:id`: Delete a booking
