import { ProducerClient } from '../../domain/ProducerClient';
import { createKafkaProducerAdapter } from '../../infra/factories/KafkaProducerAdapterFactory';

export const createProducer = () => {
  const producerAdapter = createKafkaProducerAdapter();
  const result = new ProducerClient(producerAdapter);

  return result;
};
