const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const http = require('http');
const cors = require('cors');

const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebsocket(server);


mongoose.connect(`mongodb://BernardoSertorio:189500be@cluster0-shard-00-00-oo0wa.mongodb.net:27017,cluster0-shard-00-01-oo0wa.mongodb.net:27017,cluster0-shard-00-02-oo0wa.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`, {
   useNewUrlParser: true ,
   useUnifiedTopology: true, 
})

app.use(cors()); // libera o acesso externo para nosso banco de dados.
app.use(express.json());
app.use(routes);

server.listen(3333);