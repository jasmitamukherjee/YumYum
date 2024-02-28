// const express = require('express');
// const app = express();
// const port = 5000;
// const mongoDB = require('./db');

// // Use express.json() middleware for parsing JSON request bodies
// app.use(express.json());

// // Define CORS headers middleware
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
// });

// mongoDB();

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });


// app.use('/api', require('./Routes/CreateUser'));

// app.use('/api', require('./Routes/DisplayData'));

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });


const express = require('express');
const app = express();
const port = 5000;
const mongoDB = require('./db');
const cors = require('cors'); // Import the cors package
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
// Use the cors middleware
app.use(cors());

// Connect to MongoDB
mongoDB();

app.use(express.json());
app.use('/api', require('./Routes/CreateUser'));
app.use('/api', require('./Routes/DisplayData'));
app.use('/api', require('./Routes/Orderdata'));
app.use('/api',require('./Routes/UpdateInfo'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



// -------------------------------------------------------------


// const express = require('express');
// const app = express();
// const port = 5000;
// const mongoDB = require('./db');
// const cors = require('cors'); 


// app.use(cors());
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next(); 
// });



// mongoDB();

// app.use(express.json());
// app.use('/api', require('./Routes/CreateUser'));
// app.use('/api',require('./Routes/UpdateInfo'))
// app.use('/api', require('./Routes/DisplayData'));
// app.use('/api', require('./Routes/Orderdata'));







// app.get('/', (req, res) => {
//     res.send("Hello World");
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// ----------------------------------------------------------



// const express = require('express');
// const app = express();
// const port = 5000;
// const mongoDB = require('./db');

// // Middleware for CORS and JSON request body parsing
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
// });
// app.use(express.json());

// // Connect to MongoDB
// mongoDB();

// // Define your routes using separate routers
// app.use('/api',require('./Routes/CreateUser'))
// app.use('/api',require('./Routes/DisplayData'))
// app.use('/api',require('./Routes/OrderData'))


// app.get('/',(req,res)=>{
//     res.send("Hellow World ")
// })
// // Start the Express server
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
