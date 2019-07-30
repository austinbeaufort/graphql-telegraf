const express = require('express');
const graphqlHTTP = require('express-graphql');
const Influx = require('influx');


// CONNECT TO INFLUX
const influx = new Influx.InfluxDB({
    host: 'localhost',
    database: 'telegraf'
})

// SCHEMA
const schema = require('./schema');


// Resolvers
const root = {
    getCPU: () => {
        return influx.query(`select * from win_cpu order by desc limit 10`);
    },

    getSystem: () => {
        return influx.query(`select * from win_system order by desc limit 10`);
    },    

    // getSystemTimes: () => {
    //     let queryArray = [];

        
    // }
}

// function getTimes(timestamp) {
//     console.log(timestamp);
// }


// CONNECT TO SERVER
const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

port = 4000 || process.env.PORT;
app.listen(port);