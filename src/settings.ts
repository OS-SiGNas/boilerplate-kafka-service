import dotenv from "dotenv";

import type { Environment } from "./types";

dotenv.config();

class Settings {
  readonly #PORT: string | undefined;
  readonly #ENVIRONMENT: Environment | undefined;
  // readonly #KAFKA_BROKERS: string | undefined;
  readonly #KAFKA_BROKER: string | undefined;
  readonly #KAFKA_CLIENT_ID: string | undefined;
  readonly #KAFKA_GROUP_ID: string | undefined;
  constructor(env: NodeJS.ProcessEnv) {
    this.#PORT = env.PORT;
    this.#ENVIRONMENT = env.NODE_ENV as Environment | undefined;
    // this.#KAFKA_BROKERS = env.KAFKA_BROKERS;
    this.#KAFKA_BROKER = env.KAFKA_BROKER;
    this.#KAFKA_CLIENT_ID = env.KAFKA_CLIENT_ID;
    this.#KAFKA_GROUP_ID = env.KAFKA_GROUP_ID;
  }

  get port(): number {
    if (this.#PORT === undefined) throw new Error("PORT var undefined");
    return +this.#PORT;
  }

  get environment(): Environment {
    if (this.#ENVIRONMENT === undefined) throw new Error("NODE_ENV=dev|prod|test var undefined");
    return this.#ENVIRONMENT;
  }

  // KAFKA

  get clientId(): string {
    if (this.#KAFKA_CLIENT_ID === undefined) throw new Error("KAFKA_CLIENT_ID var undefined");
    return this.#KAFKA_CLIENT_ID;
  }

  get brokers(): string[] {
    if (this.#KAFKA_BROKER === undefined) throw new Error("KAFKA_BROKER var undefined");
    return [this.#KAFKA_BROKER];
  }

  get groupId(): string {
    if (this.#KAFKA_GROUP_ID === undefined) throw new Error("KAFKA_GROUP_ID var undefined");
    return this.#KAFKA_GROUP_ID;
  }
}

export const { port, environment, brokers, clientId, groupId } = new Settings(process.env);
