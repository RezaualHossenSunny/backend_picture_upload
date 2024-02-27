const express = require('express');
const prodacet = require('./controler/prodacetcontroler');
const upload = require('./Midleware/muter');
const app = express()
const port = 3000


app.listen(port, () => {
    console.log('server running')
  });

  app.post('/prodacet',upload.single("prodacetImage"), prodacet)