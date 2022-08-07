import { Router } from "express"
import {verifySignup} from '../middlewares'

const router = Router();

import * as authctrl from '../controllers/auth.controller';
router.post('/signin', authctrl.signin)
router.post('/signup', [verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted], authctrl.signup)


export default router;