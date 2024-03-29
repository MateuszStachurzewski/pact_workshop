const { server } = require('./app');
const dotevn = require('dotenv');
dotevn.config();

port = process.env.PROVIDER_PORT;

server.listen(port, () => {
  console.log(`Users service running on http://localhost:${port}`);
});
