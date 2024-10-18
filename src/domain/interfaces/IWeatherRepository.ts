import { Weather } from "../entities/Weather";

/**
 * Interface for the weather repository.
 */
export interface IWeatherRepository {

    /**
     * Retrieves weather data for a given location based on latitude and longitude.
     * @param lat - Latitude of the location
     * @param lng - Longitude of the location
     */
    getWeatherByLocation(lat: number, lng: number): Promise<Weather>;
}
