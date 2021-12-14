import { ConsumerClient } from '../../domain/ConsumerClient';
import { createKafkaConsumerAdapter } from '../../infra/factories/KafkaConsumerAdapterFactory';

export const createConsumer = (groupId: string) => {
  const consumerAdapter = createKafkaConsumerAdapter(groupId);
  const result = new ConsumerClient(consumerAdapter);

  return result;
};
