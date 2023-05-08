import { kafkaConsumer, kafkaProducer } from "../../kafka";
import { PaymentezConsumer } from "./infrastructure/paymentez.consumer";
import { PaymentezController } from "./infrastructure/paymentez.controller";

const strategy = new PaymentezController({ kafkaProducer });

export default new PaymentezConsumer({
  kafkaConsumer,
  kafkaProducer,
  strategy,
});
