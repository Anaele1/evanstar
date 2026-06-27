import express from "express"
import { bookServices, cancelBookedService } from "../controllers/servicesContoller.js"
const router = express.Router()

// Book service
router.post('/create', bookServices)

// Cancel service
router.delete('/delete/:id', cancelBookedService)


export default router;