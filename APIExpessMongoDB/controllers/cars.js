//const Users = require('../models/user');
const Users = require('../models/user');
const Car = require('../models/car');
//const ValidateParam = require('../helpers/routeHelpers');

const Joi = require('joi');
// const idSchema = Joi.object().keys({
//    userId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
// });

// TODO: in here have 2 method is: index, newUser
module.exports = {
   index: async (req, res, next) => {
      //const { userId } = req.params; // *: param = ID
      const cars = await Car.find({}); // Get data from 'cars' add in 'users' and return 'user'
      res.status(200).json(cars);
      

   },

   newCars: async (req, res, next) => {

      //  Get value seller(ID) and find User wiit ID.  
      //  seller is User 
      const seller = await Users.findById(req.body.seller); // ...???...

      //  Create new car with all info user fill.
      const newCar = req.body;

      //  Delete value seller (in all data user fill). 
      delete newCar.seller;

      // get info user fill (newCar) transform to font 'Car' defined befor
      const car = new Car(newCar);

      console.log('Before car.seller: ', car.seller);
      console.log('Before seller: ',seller);
      car.seller = seller;

      console.log('After car.seller: ', car.seller);
      console.log('After seller: ',seller);

      // when save will auto create new "id".
      await car.save();

      // Seller is user so class is cars. 
      // Push new car into seller.cars.  
      seller.cars.push(car);

      await seller.save();

      res.status(200).json(car);

   
   
   }

}