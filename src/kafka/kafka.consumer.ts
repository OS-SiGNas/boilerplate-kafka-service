import { Kafka } from "kafkajs";
import type { Consumer, EachMessageHandler } from "kafkajs";

interface Subscriber {
  groupId?: string;
  fromBeginning?: boolean;
  topic: string;
  payload: EachMessageHandler;
}

interface Dependences {
  clientId: string;
  brokers: string[];
}

export class ConsumerClient {
  readonly #kafka: Kafka;
  readonly #consumers: Consumer[] = [];
  constructor({ clientId, brokers }: Dependences) {
    this.#kafka = new Kafka({ clientId, brokers });
  }

  public subscribe = async ({ groupId = "", fromBeginning = true, topic, payload }: Subscriber): Promise<void> => {
    try {
      const consumer = this.#kafka.consumer({ groupId });
      await consumer.connect();
      await consumer.subscribe({ topic, fromBeginning });
      await consumer.run({ eachMessage: payload });
      this.#consumers.push(consumer);
    } catch (error) {
      console.log(error);
    }
  };

  public shutDown = (): void => {
    for (const consumer of this.#consumers) {
      void consumer.disconnect();
    }
  };
}
