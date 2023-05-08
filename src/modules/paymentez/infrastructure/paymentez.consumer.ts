import type { PaymentezStrategy } from "./paymentez.strategy";
import type { ConsumerClient, ProducerClient } from "../../../kafka";
import type { IService } from "../../../types";

interface Dependences {
  kafkaProducer: ProducerClient;
  kafkaConsumer: ConsumerClient;
  strategy: PaymentezStrategy;
  groupId?: string;
}

export class PaymentezConsumer implements IService {
  // readonly #groupId: string;
  readonly #producer: ProducerClient;
  readonly #consumer: ConsumerClient;
  readonly #strategy: PaymentezStrategy;
  constructor({ kafkaProducer, kafkaConsumer, strategy }: Dependences) {
    // this.#groupId = groupId;
    this.#producer = kafkaProducer;
    this.#consumer = kafkaConsumer;
    this.#strategy = strategy;
  }

  public run = async (): Promise<void> => {
    const { subscribe } = this.#consumer;
    const { test1, test2, test3 } = this.#strategy;
    try {
      await subscribe({ topic: "test1", payload: test1 });
      await subscribe({ topic: "test2", payload: test2 });
      await subscribe({ topic: "test3", payload: test3 });
    } catch (error) {
      console.trace(error);
      await this.#producer.produce({ topic: "log_error", messages: [] });
    }
  };
}
