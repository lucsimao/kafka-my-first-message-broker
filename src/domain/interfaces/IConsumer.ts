export interface IConsumer {
  connect(): Promise<void>;
  subscribe(topic: string): Promise<void>;
  listen(callback: CallableFunction): Promise<void>;
}
