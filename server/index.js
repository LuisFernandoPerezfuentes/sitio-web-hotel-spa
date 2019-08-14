const express = require('express');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 8080);

// Middlewares
app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.json());

// Routes
app.use('/api/contact', require('./routes/contact.routes'));
app.use('/api/timework', require('./routes/timework.routes'));
app.use('/api/typeroom', require('./routes/typeroom.routes'));
app.use('/api/reservamasaje', require('./routes/reservamasaje.routes'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});