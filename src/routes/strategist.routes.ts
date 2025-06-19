import { Router } from 'express';
import {
  brainstorm,
  businessPlan,
  marketSize,
  pitchDeck,
  swot
} from '../controllers/strategist.conroller';

const strategistRouter = Router();

strategistRouter.post('/brainstorm', brainstorm);
strategistRouter.post('/plan', businessPlan);
strategistRouter.post('/market', marketSize);
strategistRouter.post('/pitch', pitchDeck);
strategistRouter.post('/swot', swot);

export default strategistRouter;
