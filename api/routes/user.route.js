import express from "express";
import { tester , updateUser, deleteUser, getUserListings, getUser } from "../controllers/user.controller.js";
import {verifyToken} from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test', tester);
router.post('/update/:id',verifyToken, updateUser);
router.delete('/delete/:id',verifyToken, deleteUser);
router.get('/listings/:id',verifyToken,getUserListings);
router.get('/:id',verifyToken, getUser);

export default router;

