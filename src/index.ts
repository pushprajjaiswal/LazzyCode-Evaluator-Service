import express from 'express';

import serverConfig from './config/serverConfig';
import SampleQueueProducer from './producers/SampleQueueProducer';
import apiRouter from './routes';
import SampleWorker from './workers/sampleWorker';

const app = express();

app.use('/api', apiRouter);

app.listen(serverConfig.PORT, () => {
  console.log(`Server is started at *:${serverConfig.PORT}`);
  
  SampleWorker('SampleQueue');

  SampleQueueProducer('SampleJob', {
    name: "Pushpraj",
    company:"Cansvolution",
    position: "Software engineer",
    location: "Pune"
  });
});