import { Router } from "express";
import controllerDoctor from "./controllers/controller.doctor.js";

const router = Router();


router.get("/doctors", controllerDoctor.Listar);
router.post("/doctors", controllerDoctor.Inserir);


export default router;