/* eslint-disable no-console */
import { IConsumer } from './interfaces/IConsumer';

export class ConsumerClient {
  constructor(private readonly consumer: IConsumer) {}

  public async listenTopic(topic: string): Promise<void> {
    await this.consumer.connect();
    await this.consumer.subscribe(topic);
    console.log(`Listen To Topic ${topic}`);

    await this.consumer.listen((topic: string, message: string) => {
      console.log(
        `Received in topic ${topic} the message ${JSON.stringify(message)}`
      );
    });
  }
}
