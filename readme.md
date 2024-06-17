
# Medical Dashboard Backend

This repository contains the backend for the Medical Dashboard application. It is built using Node.js, Express, and MongoDB.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/AleksandrSherehkov/medicalDashBoard_backend.git
   cd medicalDashBoard_backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file based on `.env.example` and configure your environment variables:
   ```sh
   cp .env.example .env
   ```

## Usage

1. Start the server in development mode:
   ```sh
   npm run start:dev
   ```

2. Start the server in production mode:
   ```sh
   npm start
   ```

3. The API will be available at `http://localhost:<PORT>`.

## API Endpoints

### Events

- `GET /api/events` - List all events
  - Query Parameters:
    - `page` (integer, default: 1) - Page number
    - `limit` (integer, default: 9) - Number of items per page
    - `filterQuery` (string) - Query filter
    - `category` (string) - Category filter
    - `date` (string, format: date) - Date filter
    - `sortBy` (string, enum: ["title", "category", "date"]) - Sort by field
    - `sortOrder` (string, enum: ["asc", "desc"]) - Sort order

- `POST /api/events` - Create a new event
  - Request Body:
    - `title` (string) - Title of the event
    - `description` (string) - Description of the event
    - `category` (string) - Category of the event
    - `country` (string) - Country where the event is held
    - `date` (string, format: date) - Date of the event

- `GET /api/events/{id}` - Get an event by ID
  - Path Parameters:
    - `id` (string) - Event ID

- `PUT /api/events/{id}` - Update an event by ID
  - Path Parameters:
    - `id` (string) - Event ID
  - Request Body:
    - `title` (string) - Title of the event
    - `description` (string) - Description of the event
    - `category` (string) - Category of the event
    - `country` (string) - Country where the event is held
    - `date` (string, format: date) - Date of the event

- `DELETE /api/events/{id}` - Delete an event by ID
  - Path Parameters:
    - `id` (string) - Event ID

### Users

- `GET /api/users` - List all users
  - Query Parameters:
    - `page` (integer, default: 1) - Page number
    - `limit` (integer, default: 9) - Number of items per page
    - `filterQuery` (string) - Query filter

- `POST /api/users` - Create a new user
  - Request Body:
    - `name` (string) - Name of the user
    - `email` (string) - Email of the user
    - `birthDate` (string) - Birth date of the user
    - `referralSource` (string) - Referral source of the user
    - `eventId` (string) - Event ID the user is registering for

- `GET /api/users/event/{eventId}` - Get users by event ID
  - Path Parameters:
    - `eventId` (string) - Event ID
  - Query Parameters:
    - `page` (integer, default: 1) - Page number
    - `limit` (integer, default: 9) - Number of items per page
    - `filterQuery` (string) - Query filter

- `GET /api/users/registrations/{eventId}` - Get registrations per day for an event
  - Path Parameters:
    - `eventId` (string) - Event ID

- `GET /api/users/up/ping` - Ping the server to check if it is alive

## Environment Variables

The following environment variables are required:
- `DB_HOST`: MongoDB connection string
- `PORT`: Port number for the server

## Scripts

- `npm start`: Start the server in production mode
- `npm run start:dev`: Start the server in development mode
- `npm run lint`: Run ESLint to check for linting errors
- `npm run lint:fix`: Fix linting errors automatically

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
