import { Kafka, Producer } from 'kafkajs';

import { IProducer } from '../../domain/interfaces/IProducer';

export class KafkaProducerAdapter implements IProducer {
  private readonly producer: Producer;
  constructor(kafkaInstance: Kafka) {
    this.producer = kafkaInstance.producer();
  }

  async connect(): Promise<void> {
    await this.producer.connect();
  }

  async send<K>(topic: string, value: K): Promise<void> {
    this.producer.send({
      topic,
      messages: [{ value: JSON.stringify(value) }],
    });
  }
}
