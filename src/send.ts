import { createProducer } from './main/factories/ProducerFactory';

const producer = createProducer();

producer.sendMessageToTopic('my-topic', 'Testando minha mensagem desacoplada');
