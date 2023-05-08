import type { EachMessagePayload } from "kafkajs";
import type { ProducerClient } from "../../../kafka";

interface Dependences {
  kafkaProducer: ProducerClient;
  // service: AnyService;
}

export class AnyController {
  readonly #producer: ProducerClient;
  // readonly #service: AnyService;
  constructor({ kafkaProducer }: Dependences) {
    this.#producer = kafkaProducer;
    // this.#service = service;
  }

  public test1 = async ({ topic, partition, message }: EachMessagePayload): Promise<void> => {
    try {
      const { value, offset } = message;
      console.log({ topic, partition, offset, message: value?.toString() });
    } catch (error) {
      console.log(error);
      await this.#producer.produce({ topic: "log_error", messages: [] });
    }
  };
}
