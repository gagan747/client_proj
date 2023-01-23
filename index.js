const express = require('express');
const app = express();
const path = require('path')
const { createServer } = require('http');
const httpServer = createServer(app);
const root = path.join(__dirname, 'client', 'build', 'index.html')

app.use(express.static('client/build'));
app.get('*', (req, res) => {
          res.sendFile(root);
});
httpServer.listen(process.env.PORT || 5000, () => {
          console.log(`Listening on port ${process.env.PORT || 5000}...`)
});
