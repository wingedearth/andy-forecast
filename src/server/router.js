import express from 'express';
import HomeController from './controllers/HomeController';
import VersionController from './controllers/VersionController';
import ApiController from '@/server/controllers/ApiController';

// Instantiate Express router
const router = express.Router();

router.get('/version', VersionController);
router.post('/api', ApiController);
router.get('/', HomeController);

export default router;
