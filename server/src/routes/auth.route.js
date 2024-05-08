import express from 'express';

const router = express.Router();

import {registerUser, authenticateUser} from '../controllers/index.js';

router
  .route('/signup')
  .post(registerUser);

router
  .route('/signin')
  .post(authenticateUser);

export default router;
