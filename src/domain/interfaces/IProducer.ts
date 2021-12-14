export interface IProducer {
  connect(): Promise<void>;
  send<K>(topic: string, value: K): Promise<void>;
}
