import express from 'express';

import serverConfig from './config/serverConfig';

const app = express();

app.listen(serverConfig.PORT, () => {
  console.log(`Server is started at *:${serverConfig.PORT}`);
  console.log("Wow bhaiya");
});