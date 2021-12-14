import { Kafka } from 'kafkajs';
import { KafkaConsumerAdapter } from './KafkaConsumerAdapter';
import { makeKafkaInstanceMock } from '../test/helpers/KafkaInstanceMock';

jest.mock('kafkajs');

const makeSut = () => {
  const kafka = makeKafkaInstanceMock();
  const kafkaMock = kafka.kafkaMock as Kafka;
  const fakeGroupId = 'fakeGroupId';

  const sut = new KafkaConsumerAdapter(kafkaMock, fakeGroupId);

  return { sut, kafka };
};

describe('KafkaConsumerAdapter Tests', () => {
  describe('connect', () => {
    it('should call consumer.connect with right params when method is called', async () => {
      const { sut, kafka } = makeSut();
      const connectSpy = kafka.consumerMock.connect;

      await sut.connect();

      expect(connectSpy).toBeCalledWith();
    });
  });

  describe('subscribe', () => {
    it('should call consumer.subscribe with right params when method is called', async () => {
      const { sut, kafka } = makeSut();
      const fakeTopic = 'any_topic';
      const subscribeSpy = kafka.consumerMock.subscribe;

      await sut.subscribe(fakeTopic);

      expect(subscribeSpy).toBeCalledWith({
        fromBeginning: true,
        topic: 'any_topic',
      });
    });
  });

  describe('listen', () => {
    it('should call consumer.run with right params when method is called', async () => {
      const { sut, kafka } = makeSut();
      const runSpy = kafka.consumerMock.run;

      await sut.listen(jest.fn());

      expect(runSpy).toBeCalledWith({
        eachMessage: expect.any(Function),
      });
    });
  });
});
