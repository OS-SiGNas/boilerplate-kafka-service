import { kafkaConsumer, kafkaProducer } from "../../kafka";
import { PaymentezConsumer } from "./infrastructure/paymentez.consumer";
import { PaymentezStrategy } from "./infrastructure/paymentez.strategy";

const strategy = new PaymentezStrategy({ kafkaProducer });

export default new PaymentezConsumer({
  kafkaConsumer,
  kafkaProducer,
  strategy,
});
