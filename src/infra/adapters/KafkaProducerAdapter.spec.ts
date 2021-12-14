import { Kafka } from 'kafkajs';
import { KafkaProducerAdapter } from './KafkaProducerAdapter';
import { makeKafkaInstanceMock } from '../test/helpers/KafkaInstanceMock';

jest.mock('kafkajs');

const makeSut = () => {
  const kafka = makeKafkaInstanceMock();
  const kafkaMock = kafka.kafkaMock as Kafka;

  const sut = new KafkaProducerAdapter(kafkaMock);

  return { sut, kafka };
};

describe('KafkaProducerAdapter Tests', () => {
  describe('connect', () => {
    it('should call producer.connect with right params when method is called', async () => {
      const { sut, kafka } = makeSut();
      const connectSpy = kafka.producerMock.connect;

      await sut.connect();

      expect(connectSpy).toBeCalledWith();
    });
  });

  describe('send', () => {
    it('should call consumer.subscribe with right params when method is called', async () => {
      const { sut, kafka } = makeSut();
      const fakeTopic = 'any_topic';
      const fakeValue = 'any_value';
      const subscribeSpy = kafka.producerMock.send;

      await sut.send(fakeTopic, fakeValue);

      expect(subscribeSpy).toBeCalledWith({
        topic: fakeTopic,
        messages: [{ value: JSON.stringify(fakeValue) }],
      });
    });
  });
});
