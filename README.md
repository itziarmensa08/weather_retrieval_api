
# Weather Retrieval API

This project is a Node.js API application designed to fetch weather data using the OpenWeatherMap API.

## Table of Contents
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)

## Installation

### 1. Clone the repository:
```bash
git clone git@github.com:itziarmensa08/weather_retrieval_api.git
cd weather-retrieval-api
````

### 2. Install dependencies:

Run the following command to install all required dependencies:

```bash
npm install
````

### 3. Set up environment variables:

```file
PORT = 3000
NODE_ENV = dev
apiKeyOpenWeatherMap = your_openweathermap_api_key
baseUrlOpenWeatherMap = https://api.openweathermap.org/data/2.5/weather
````

### 4. Run the application:

You can now start the application with the following command:

#### Development

```bash
npm run dev
````

#### Production

```bash
npm run start
````

## API Endpoints

### 1. GET Weather Data

Retrieves the current weather for a specific location using latitude and longitude.

- URL: /api/weather
- Method: GET 
- Query Parameters: 
    - lat: Latitude of the location (e.g., 41.4) 
    - lng: Longitude of the location (e.g., 2.17) 
- Example:

```bash
curl -X GET 'http://localhost:3000/api/weather?lat=41.4&lng=2.17'
````

- Response:

```json
{
  "temperature": {
    "current": 291.66,
    "feelsLike": 291.08,
    "min": 290.77,
    "max": 292.99
  },
  "humidity": 58,
  "pressure": 1016,
  "wind": {
    "speed": 4.63,
    "direction": 330
  },
  "cloudCoverage": 20,
  "description": "light rain",
  "sun": {
    "sunrise": 1729231598,
    "sunset": 1729271152
  }
}
````

## Testing
### 1. Unit tests

To run the unit tests for domain services and use cases and integration tests that validate the API functionality:

```bash
npm run test:unit
````

### 2. Integration tests

To run integration tests that validate the API functionality:

```bash
npm run test:integration
````