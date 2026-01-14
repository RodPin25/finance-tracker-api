const express = require('express');
const app= express();

const loginRoutes = require('./routes/login.routes');
const signupRoutes = require('./routes/signup.routes')
const transactionsRoutes = require('./routes/transaction.routes');
const balanceRoutes = require('./routes/balance.routes');
const { balance } = require('./controllers/balance.controller');

app.use(express.json());

//Authentificaction routes
app.use('/api/auth',loginRoutes);
app.use('/api/auth',signupRoutes);

//Transaction Routes
app.use('/api/transactions',transactionsRoutes)

//Balance routes
app.use('/api',balanceRoutes);

module.exports = app;