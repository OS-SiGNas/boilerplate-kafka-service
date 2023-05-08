import { healthPing } from "./http";
import { kafkaProducer } from "./kafka";
import { modules } from "./modules";

import type { IService } from "./types";

(function (...services: IService[]): void {
  for (const service of services) {
    service.run();
  }
})(healthPing, kafkaProducer, ...modules);
