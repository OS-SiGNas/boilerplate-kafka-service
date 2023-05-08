import { Kafka } from "kafkajs";

import type { Producer, ProducerRecord } from "kafkajs";
import type { IService } from "../types";

interface Dependences {
  brokers: string[];
}

export class ProducerClient implements IService {
  readonly #producer: Producer;
  constructor({ brokers }: Dependences) {
    const kafka = new Kafka({ brokers });
    this.#producer = kafka.producer();
  }

  public run = async (): Promise<void> => {
    await this.#producer.connect().catch((error) => {
      console.trace(error);
    });
  };

  public produce = async (record: ProducerRecord): Promise<void> => {
    await this.#producer.send(record).catch((error) => {
      console.trace(error);
    });
  };

  public shutDown = async (): Promise<void> => {
    await this.#producer.disconnect();
  };
}
