import { ProducerClient } from "./kafka.producer";
import { ConsumerClient } from "./kafka.consumer";
import { brokers, clientId } from "../settings";

export type { ProducerClient } from "./kafka.producer";
export type { ConsumerClient } from "./kafka.consumer";

export const kafkaProducer = new ProducerClient({ brokers });
export const kafkaConsumer = new ConsumerClient({ brokers, clientId });
