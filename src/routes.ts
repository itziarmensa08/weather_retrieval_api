
import { Router } from 'express';
import weatherRoutes from './routes/weatherRoutes';

const router = Router();

router.use(weatherRoutes);

export default router;
