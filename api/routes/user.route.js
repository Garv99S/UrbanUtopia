import express from "express";
import { tester , updateUser } from "../controllers/user.controller.js";
import {verifyToken} from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test', tester);
router.post('/update/:id',verifyToken, updateUser);

export default router;

