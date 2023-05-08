import { kafkaConsumer, kafkaProducer } from "../../kafka";
import { AnyConsumer } from "./infrastructure/any.consumer";
import { AnyStrategy } from "./infrastructure/any.strategy";

const strategy = new AnyStrategy({ kafkaProducer });

export default new AnyConsumer({
  kafkaConsumer,
  kafkaProducer,
  strategy,
});
