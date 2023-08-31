const express = require('express')
const app = express();
const connectDB = require('./configurations/db-config')
app.use(express.json());


connectDB();
const PORT = process.env.PORT || 5001;

app.get('/', (req, res)=>{
    const status = {
        "Status" : "Runnig"
    };

    res.send(status);
} );

const collections = require('./routers/collections')
app.use('/api', collections)



app.listen(PORT, ()=>{
    console.log('Server Listen on PORT: ' , PORT)
});
