import { KafkaConsumerAdapter } from '../adapters/KafkaConsumerAdapter';
import { KafkaSingleton } from '../singletons/KafkaSingleton';

export const createKafkaConsumerAdapter = (
  groupId: string
): KafkaConsumerAdapter => {
  const kafkaInstance = KafkaSingleton.getInstance();
  const result = new KafkaConsumerAdapter(kafkaInstance, groupId);

  return result;
};
