const mongoose= require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/studentapi'
// {
//     useCreateIndex :true,
//     useNewUrlParser : true ,
//     useUnifiedTopology:true,
//     // dbName:"studenta",
//     // user:'root',
//     // pass:'<PASSWORD>',
//     // authSource:'admin',
//     // retryWrites: false,
//     // autoIndex:false,
//     // connectTimeoutMS: 360000,
//     // socketTimeoutMS: null,
//     // family:4,
//     // minPoolSize:5,

// }
).then(()=>{
    console.log(`Database connected successfully`);
}).catch((e)=>{
    console.log("error");
})
// const MongoClient = require('mongoose').MongoClient;

// const url = 'mongodb://127.0.0.1:27017/mydatabase'; // Replace with your MongoDB connection string

// MongoClient.connect(url,  (err, client) => {
//   if (err) {
//     console.error('Failed to connect to MongoDB:', err);
//     return;
//   }
  
//   console.log('Connected to MongoDB');
//   // Additional code to interact with the database
  
//   // Close the MongoDB connection when the Node.js application is terminated
//   process.on('SIGINT', () => {
//     client.close();
//     process.exit();
//   });
// });