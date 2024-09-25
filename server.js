const app = require('./app')
const sequelize = require('./db/database');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3000;


sequelize.sync({ alter: true })
    .then(() => {
        console.log('Database connected and models synced.');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.error('Error connecting to the database', err));
