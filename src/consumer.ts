import { createConsumer } from './main/factories/ConsumerFactory';

const consumer = createConsumer('my-group');

consumer.listenTopic('my-topic');
