import { createServer } from "http";
import type { Environment, IService } from "../types";

interface Dependences {
  port: number;
  environment: Environment;
}

export class HealthPing implements IService {
  #port: number;
  #environment: Environment;
  constructor({ port, environment }: Dependences) {
    this.#port = port;
    this.#environment = environment;
  }

  public run = (): void => {
    const server = createServer((_, res): void => {
      res.writeHead(204);
      res.end();
    });
    server.listen(this.#port, (): void => {
      console.log(this.#message());
    });
  };

  readonly #message = (): string => {
    if (this.#environment === "dev") return "👽 DEV MODE 👽";
    if (this.#environment === "test") return "🕵️  TEST MODE 🪲";
    return "🔥 ON 🔥";
  };
}
