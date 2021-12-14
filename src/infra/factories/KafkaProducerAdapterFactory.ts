import { KafkaProducerAdapter } from '../adapters/KafkaProducerAdapter';
import { KafkaSingleton } from '../singletons/KafkaSingleton';

export const createKafkaProducerAdapter = (): KafkaProducerAdapter => {
  const kafkaInstance = KafkaSingleton.getInstance();
  const result = new KafkaProducerAdapter(kafkaInstance);

  return result;
};
