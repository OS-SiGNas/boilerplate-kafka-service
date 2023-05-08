import { HealthPing } from "./http.healthPing";
import { port, environment } from "../settings";

export const healthPing = new HealthPing({ port, environment });
