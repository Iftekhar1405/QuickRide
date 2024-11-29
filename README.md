# QuickRide Taxi Booking Application

## Frontend Setup

1. Create a new React project

```bash
npx create-react-app quickride-frontend
cd quickride-frontend
```

2. Install dependencies

```bash
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
npm install react-hook-form @hookform/resolvers yup
```

3. Replace src files with the provided React components

## Backend Setup

1. Create a new NestJS project

```bash
npm i -g @nestjs/cli
nest new quickride-backend
cd quickride-backend
```

2. Install additional dependencies

```bash
npm install @nestjs/typeorm typeorm sqlite3
npm install class-validator class-transformer
```

3. Add provided TypeScript files to respective modules

## Running the Application

- Frontend: `npm start`
- Backend: `npm run start:dev`

## Features

- Immediate and Scheduled Taxi Booking
- Form Validation
- Responsive Design
- Vehicle Type Selection
