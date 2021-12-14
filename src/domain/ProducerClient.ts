/* eslint-disable no-console */
import { IProducer } from './interfaces/IProducer';

export class ProducerClient {
  constructor(private readonly producer: IProducer) {}

  public async sendMessageToTopic(
    topic: string,
    message: string
  ): Promise<void> {
    await this.producer.connect();
    console.log(`Sending to ${topic} the message ${JSON.stringify(message)}`);
    await this.producer.send(topic, message);
    console.log(`Message sent:  ${topic} the message ${message.toString()}`);
  }
}
