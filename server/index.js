import app from './server.js';
import { createServer } from 'http';

export default function handler(req, res) {
  const server = createServer(app);
  server.listen(0, () => {
    const address = server.address();
    app.emit('request', req, res);
  });
}
