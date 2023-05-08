import type { AnyStrategy } from "./any.strategy";
import type { ConsumerClient, ProducerClient } from "../../../kafka";
import type { IService } from "../../../types";

interface Dependences {
  kafkaProducer: ProducerClient;
  kafkaConsumer: ConsumerClient;
  strategy: AnyStrategy;
  groupId?: string;
}

export class AnyConsumer implements IService {
  // readonly #groupId: string;
  readonly #producer: ProducerClient;
  readonly #consumer: ConsumerClient;
  readonly #strategy: AnyStrategy;
  constructor({ kafkaProducer, kafkaConsumer, strategy }: Dependences) {
    // this.#groupId = groupId;
    this.#producer = kafkaProducer;
    this.#consumer = kafkaConsumer;
    this.#strategy = strategy;
  }

  public run = async (): Promise<void> => {
    try {
      await this.#consumer.subscribe({ topic: "test1", payload: this.#strategy.test1 });
    } catch (error) {
      console.log(error);
      await this.#producer.produce({ topic: "log_error", messages: [] });
    }
  };
}
