import axios from 'axios';
import { IWeatherRepository } from '../../domain/interfaces/IWeatherRepository';
import { Weather } from '../../domain/entities/Weather';
import { Temperature } from '../../domain/value_objects/Temperature';
import { Wind } from '../../domain/value_objects/Wind';
import { Sun } from '../../domain/value_objects/Sun';

/**
 * Implementation of the IWeatherRepository interface using the OpenWeatherMap API.
 */
export class OpenWeatherMapAPI implements IWeatherRepository {
    private readonly apiKey = process.env.apiKeyOpenWeatherMap;
    private readonly baseUrl = process.env.baseUrlOpenWeatherMap;

    /**
     * Fetches weather data from the OpenWeatherMap API and maps the API response to the Weather entity.
     * @param lat - Latitude of the location
     * @param lng - Longitude of the location
     * @returns A Promise that resolves to a Weather Entity
     */
    async getWeatherByLocation(lat: number, lng: number): Promise<Weather> {
        const response = await axios.get(`${this.baseUrl}`, {
            params: {
                lat,
                lon: lng,
                appid: this.apiKey
            }
        });

        const data = response.data;

        // Mapping the API response to the Weather entity
        return new Weather(
            new Temperature(data.main.temp, data.main.feels_like, data.main.temp_min, data.main.temp_max),
            data.main.humidity,
            data.main.pressure,
            new Wind(data.wind.speed, data.wind.deg),
            data.clouds.all,
            data.weather[0].description,
            new Sun(data.sys.sunrise, data.sys.sunset)
        );
    }
}
