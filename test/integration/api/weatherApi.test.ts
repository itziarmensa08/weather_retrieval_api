import request from 'supertest';
import { Weather } from "../../../src/domain/entities/Weather";
import { Sun } from "../../../src/domain/value_objects/Sun";
import { Temperature } from "../../../src/domain/value_objects/Temperature";
import { Wind } from "../../../src/domain/value_objects/Wind";
import { OpenWeatherMapAPI } from "../../../src/infraestructure/api/OpenWeatherMapApi";
import { app, server } from '../../../src/app';


jest.mock('../../../src/infraestructure/api/OpenWeatherMapApi.ts');

describe('Weather API', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    afterAll((done) => {
        server.close(done);
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

        (OpenWeatherMapAPI.prototype.getWeatherByLocation as jest.Mock).mockResolvedValue(mockWeather);

        const response = await request(app).get('/api/weather?lat=41.4&lng=2.17');

        expect(response.status).toBe(200);
        expect(response.body).toMatchObject({
            temperature: {
                current: 20,
                feelsLike: 19,
                min: 15,
                max: 25
            },
            humidity: 70,
            pressure: 1010,
            wind: {
                speed: 10,
                direction: 90
            },
            cloudCoverage: 20,
            description: 'Clear sky',
            sun: {
                sunrise: 1609459200,
                sunset: 1609498800
            }
        });
    });
});
