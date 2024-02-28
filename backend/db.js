// const mongoose = require('mongoose');
// const mongoURI =


// const mongoDB = ()=>{
//     mongoose.connect(mongoURI,()=>{
//         console.log('ok connected')
//     });

// }

// module.exports = mongoDB;

// const mongoose = require('mongoose');

// module.exports = async function () {
//   try {
//     await mongoose.connect('mongodb+srv://gofood:gofood123@cluster0.wshfkrp.mongodb.net/gofoodmern?retryWrites=true&w=majority', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Connected to MongoDB');
//     const fetched_data = await mongoose.connection.db.collection("food_items");
//     fetched_data.find({}).toArray( function(error,data){
//         if (error) {console.log(error);}
//         else {
//             global.food_items = data;
//             console.log(global.food_items)
            
//         }
//     })
//   } catch (error) { 
//     console.error('Error connecting to MongoDB:', error);
//   }
// };
const mongoose = require('mongoose');

module.exports = async function () {
  try {
    await mongoose.connect('mongodb+srv://gofood:gofood123@cluster0.wshfkrp.mongodb.net/gofoodmern?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
    const fetched_data = await mongoose.connection.db.collection("food_items");
    const data = await fetched_data.find({}).toArray();
    global.food_items = data;
    // console.log(global.food_items);
    const fetched_data1 = await mongoose.connection.db.collection("foodCategory");
    const catData = await fetched_data1.find({}).toArray();
    global.foodCategory = catData;
    // console.log(global.foodCategory);
    

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};


