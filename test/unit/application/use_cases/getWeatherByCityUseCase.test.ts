import { GetWeatherByCityUseCase } from "../../../../src/application/use_cases/GetWeatherByCityUseCase";
import { Weather } from "../../../../src/domain/entities/Weather";
import { WeatherService } from "../../../../src/domain/services/WeatherService";
import { Sun } from "../../../../src/domain/value_objects/Sun";
import { Temperature } from "../../../../src/domain/value_objects/Temperature";
import { Wind } from "../../../../src/domain/value_objects/Wind";


const mockWeatherService = {
    getWeather: jest.fn()
} as unknown as WeatherService;

describe('GetWeatherByCityUseCase', () => {
    let getWeatherByCityUseCase: GetWeatherByCityUseCase;

    beforeEach(() => {
        getWeatherByCityUseCase = new GetWeatherByCityUseCase(mockWeatherService);
    });

    it('should return weather data for a given city', async () => {
        const mockWeather = new Weather(
            new Temperature(20, 19, 15, 25),
            70,
            1010,
            new Wind(10, 90),
            20,
            'Clear sky',
            new Sun(1609459200, 1609498800)
        );

        (mockWeatherService.getWeather as jest.Mock).mockResolvedValue(mockWeather);

        const result = await getWeatherByCityUseCase.execute(41.4, 2.17);

        expect(result).toEqual(mockWeather);
        expect(mockWeatherService.getWeather).toHaveBeenCalledWith(41.4, 2.17);
    });
});
