import { Weather } from "../../../../src/domain/entities/Weather";
import { IWeatherRepository } from "../../../../src/domain/interfaces/IWeatherRepository";
import { WeatherService } from "../../../../src/domain/services/WeatherService";
import { Sun } from "../../../../src/domain/value_objects/Sun";
import { Temperature } from "../../../../src/domain/value_objects/Temperature";
import { Wind } from "../../../../src/domain/value_objects/Wind";


const mockWeatherRepository: IWeatherRepository = {
    getWeatherByLocation: jest.fn()
};

describe('WeatherService', () => {
    let weatherService: WeatherService;

    beforeEach(() => {
        weatherService = new WeatherService(mockWeatherRepository);
    });

    it('should return weather data for a given location', async () => {
        const mockWeather = new Weather(
            new Temperature(20, 19, 15, 25),
            70,
            1010,
            new Wind(10, 90),
            20,
            'Clear sky',
            new Sun(1609459200, 1609498800)
        );

        (mockWeatherRepository.getWeatherByLocation as jest.Mock).mockResolvedValue(mockWeather);

        const result = await weatherService.getWeather(41.4, 2.17);

        expect(result).toEqual(mockWeather);
        expect(mockWeatherRepository.getWeatherByLocation).toHaveBeenCalledWith(41.4, 2.17);
    });
});
