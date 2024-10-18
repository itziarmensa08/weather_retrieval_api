import { WeatherService } from '../../domain/services/WeatherService';

/**
 * Use case responsible for retrieving weather data for a given location.
 */
export class GetWeatherByCityUseCase {
    constructor(private weatherService: WeatherService) {}

    /**
     * Executes the use case to retrieve weather information for a specific latitude and longitude
     * @param lat - Latitude of the location
     * @param lng - Longitude of the location
     * @returns A Promise containing the weather data for the given location
     */
    async execute(lat: number, lng: number) {
        return this.weatherService.getWeather(lat, lng);
    }
}