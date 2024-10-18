import { Weather } from '../../domain/entities/Weather';

export class WeatherDTO {
    temperature: {
        current: number;
        feelsLike: number;
        min: number;
        max: number;
    };
    humidity: number;
    pressure: number;
    wind: {
        speed: number;
        direction: number;
    };
    cloudCoverage: number;
    description: string;
    sun: {
        sunrise: number;
        sunset: number;
    };

    constructor(weather: Weather) {
        this.temperature = {
            current: weather.temperature.current,
            feelsLike: weather.temperature.feelsLike,
            min: weather.temperature.min,
            max: weather.temperature.max,
        };
        this.humidity = weather.humidity;
        this.pressure = weather.pressure;
        this.wind = {
            speed: weather.wind.speed,
            direction: weather.wind.direction,
        };
        this.cloudCoverage = weather.cloudCoverage;
        this.description = weather.description;
        this.sun = {
            sunrise: weather.sun.sunrise,
            sunset: weather.sun.sunset,
        };
    }
}