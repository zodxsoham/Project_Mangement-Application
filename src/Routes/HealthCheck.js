import { Router } from "express";
import { healthCheck } from "../controllers/HealthCheck";

const route = Router();

router.route("/").get(healthCheck);

export default Router;
