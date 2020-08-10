import { DemoServer } from './server';

if (process.argv[2] !== 'test') {
  const server = new DemoServer();
  server.start(3001);
}