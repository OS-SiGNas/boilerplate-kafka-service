import any from "./any";
import paymentez from "./paymentez";

import type { IService } from "../types";

/** Add all modules in array */
export const modules: IService[] = [any, paymentez];
