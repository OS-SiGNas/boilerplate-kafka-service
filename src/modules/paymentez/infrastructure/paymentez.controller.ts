import type { EachMessagePayload } from "kafkajs";
import type { ProducerClient } from "../../../kafka";

interface Dependences {
  kafkaProducer: ProducerClient;
  // service: PaymentezService;
}

export class PaymentezController {
  readonly #producer: ProducerClient;
  // readonly #service: PaymentezService;
  constructor({ kafkaProducer }: Dependences) {
    this.#producer = kafkaProducer;
    // this.#service = service;
  }

  public test1 = async ({ topic, partition, message }: EachMessagePayload): Promise<void> => {
    try {
      const { value, offset } = message;
      console.log({ topic, partition, offset, message: value?.toString() });
    } catch (error) {
      console.trace(error);
      await this.#producer.produce({ topic: "log_error", messages: [] });
    }
  };

  public test2 = async ({ topic, partition, message }: EachMessagePayload): Promise<void> => {
    try {
      const { value, offset } = message;
      console.log({ topic, partition, offset, message: value?.toString() });
    } catch (error) {
      console.trace(error);
      await this.#producer.produce({ topic: "log_error", messages: [] });
    }
  };

  public test3 = async ({ topic, partition, message }: EachMessagePayload): Promise<void> => {
    try {
      const { value, offset } = message;
      console.log({ topic, partition, offset, message: value?.toString() });
    } catch (error) {
      console.trace(error);
      await this.#producer.produce({ topic: "log_error", messages: [] });
    }
  };
}
