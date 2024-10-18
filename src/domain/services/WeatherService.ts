import { Weather } from '../entities/Weather';
import { IWeatherRepository } from '../interfaces/IWeatherRepository';

/**
 * Service responsible for interacting with the weather repository to fetch weather data.
 */
export class WeatherService {
    constructor(private readonly weatherRepository: IWeatherRepository) {}

    /**
     * Fetches the weather data
     * @param lat - Latitude of the location
     * @param lng - Longitude of the location
     * @returns A Promise containing the weather data for the given location
     */
    async getWeather(lat: number, lng: number): Promise<Weather> {
        return this.weatherRepository.getWeatherByLocation(lat, lng);
    }
}
