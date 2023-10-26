import express from 'express';
import router from './router';
import bodyParser from 'body-parser';
import cors from 'cors';

const port = process.env.PORT || 4000;
const app = express();

if (process.env.NODE_ENV !== 'production') {
  app.use(cors());
}

// Parsers for POST data
app.use(bodyParser.json());
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: false, limit: '20mb' }));

// Static paths
app.use(express.static('dist/client'));

// Error logger
app.on('error', (err) => {
  console.error(err?.message);
});

// Attach router
app.use(router);

// Start server
const server = app.listen(port, () => {
  const serverAwake = `A server has materialized at port, ${port}`;

  console.log(serverAwake);
});

process.once('SIGUSR2', () => {
  console.log('SIGUSR2 recieved');
  server.close(() => {
    process.kill(process.pid, 'SIGUSR2');
  });
});

process.on('SIGINT', () => {
  server.close((err) => {
    if (err) return process.exit(1);

    process.exit(0);
  });
});
