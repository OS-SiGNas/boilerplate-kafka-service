import { kafkaConsumer, kafkaProducer } from "../../kafka";
import { AnyConsumer } from "./infrastructure/any.consumer";
import { AnyController } from "./infrastructure/any.controller";

const strategy = new AnyController({ kafkaProducer });

export default new AnyConsumer({
  kafkaConsumer,
  kafkaProducer,
  strategy,
});
