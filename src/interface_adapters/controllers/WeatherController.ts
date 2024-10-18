import { Request, Response } from 'express';
import { GetWeatherByCityUseCase } from '../../application/use_cases/GetWeatherByCityUseCase';
import { WeatherDTO } from '../dtos/WeatherDTO';

export class WeatherController {
    constructor(private getWeatherByCityUseCase: GetWeatherByCityUseCase) {}

    /**
     * Handles the HTTP request to retrieve weather data for a specific location.
     * @param req - expects lat and lng as query params
     * @param res - send the weather data or an error message
     */
    async getWeather(req: Request, res: Response): Promise<void> {
        try {
            const lat = parseFloat(req.query.lat as string);
            const lng = parseFloat(req.query.lng as string);
            const weather = await this.getWeatherByCityUseCase.execute(lat, lng);
            const weatherDTO = new WeatherDTO(weather);
            res.status(200).json(weatherDTO);
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}
