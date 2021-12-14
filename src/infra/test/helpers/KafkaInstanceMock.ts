import { Consumer, Kafka, Producer } from 'kafkajs';

export const makeKafkaInstanceMock = () => {
  const makeProducerMock = (): jest.Mocked<Partial<Producer>> => ({
    connect: jest.fn(),
    send: jest.fn(),
  });

  const makeConsumerMock = (): jest.Mocked<Partial<Consumer>> => ({
    connect: jest.fn(),
    subscribe: jest.fn(),
    run: jest.fn(),
  });

  const producerMock = makeProducerMock();
  const consumerMock = makeConsumerMock();

  const kafkaMock = {
    producer: jest.fn().mockReturnValue(producerMock),
    consumer: jest.fn().mockReturnValue(consumerMock),
  } as jest.Mocked<Partial<Kafka>>;

  return { kafkaMock, producerMock, consumerMock };
};
