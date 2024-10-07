const express = require('express');
const app = express();
const userRoutes = require('./Modules/user/routes/userRoutes'); 
const documentRoutes = require('./Modules/documents/routes/documentRoutes'); 
app.use(express.json());

app.use('/users', userRoutes); 
app.use('/documents',documentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });