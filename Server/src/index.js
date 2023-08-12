const server = require('./app');
const saveApiData = require('../src/controllers/saveApiData');
const { sequelize } = require('../DB_connection');
const PORT = 3001;

server.listen(PORT, async () => {
    await sequelize.sync({ force: true })
    await saveApiData();
    console.log(`Server raised in port: ${PORT}`);
});



