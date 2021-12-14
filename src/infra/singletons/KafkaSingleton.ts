import { Kafka } from 'kafkajs';

export class KafkaSingleton {
  private static kafkaInstance: Kafka;

  private static createKafka(): Kafka {
    return new Kafka({
      clientId: 'my-app',
      brokers: ['localhost:9092'],
    });
  }

  public static getInstance(): Kafka {
    if (!this.kafkaInstance) {
      this.kafkaInstance = this.createKafka();
    }

    return this.kafkaInstance;
  }
}
