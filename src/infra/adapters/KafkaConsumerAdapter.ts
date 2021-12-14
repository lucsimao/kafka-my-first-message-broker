import { Consumer, Kafka } from 'kafkajs';

import { IConsumer } from '../../domain/interfaces/IConsumer';

export class KafkaConsumerAdapter implements IConsumer {
  private readonly consumer: Consumer;
  constructor(kafkaInstance: Kafka, groupId: string) {
    this.consumer = kafkaInstance.consumer({ groupId });
  }

  async connect(): Promise<void> {
    await this.consumer.connect();
  }

  async subscribe(topic: string) {
    await this.consumer.subscribe({ topic, fromBeginning: true });
  }

  async listen(callback: CallableFunction) {
    await this.consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        callback(topic, message?.value?.toString(), partition);
      },
    });
  }
}
