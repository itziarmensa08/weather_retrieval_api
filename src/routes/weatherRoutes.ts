import { Router } from 'express';
import { OpenWeatherMapAPI } from '../infraestructure/api/OpenWeatherMapApi';
import { WeatherService } from '../domain/services/WeatherService';
import { GetWeatherByCityUseCase } from '../application/use_cases/GetWeatherByCityUseCase';
import { WeatherController } from '../interface_adapters/controllers/WeatherController';

const router = Router();

const openWeatherMapApi = new OpenWeatherMapAPI();
const weatherService = new WeatherService(openWeatherMapApi);
const getWeatherByCityUseCase = new GetWeatherByCityUseCase(weatherService);
const weatherController = new WeatherController(getWeatherByCityUseCase);

router.get('/api/weather', (req, res) => weatherController.getWeather(req, res));

export default router;