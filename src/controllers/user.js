import { Router } from "express";

import { listUsers, createUser } from "../services/user";

const router = Router();

router.get('/', async(req, res) => {
    res.send('GET USER')
})

router.post('/', (req, res) => {
    res.send('POST USER')
})

router.delete('/', (req, res) => {
    res.send('DELETE USER')
})

export default router