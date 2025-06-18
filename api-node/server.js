const express = require('express');
const app = express();
const camarasRouter = require('./camaras');

app.use('/camaras', camarasRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
