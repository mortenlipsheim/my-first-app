const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello from my first containerized app!</h1><p>This is running on Proxmox!</p>');
});

app.listen(PORT, () => {
  console.log(`Web server is listening on port ${PORT}`);
});