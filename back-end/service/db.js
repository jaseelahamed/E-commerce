const mongoose=require("mongoose")

// connection string
mongoose.connect("mongodb://localhost:27017/E-commerce",{
useNewUrlparser:true
})
// definig model
const RRR=mongoose.model('RRR',{
    usname:String,
    email:String,

    
    password:String,
    cart:[],
})

const Products =  mongoose.model('Prodects',{
    id: Number,
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: {
      rate: Number,
      count: Number,
    },
});






const Prooduct =  mongoose.model('Proodect',{
  id: Number,
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
});



// module.exports = Product;


module.exports={
        RRR,
    Products,
    Prooduct
}
