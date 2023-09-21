

// importing express fw
const express = require("express");

const jwt = require("jsonwebtoken");



// importing cors
const cors=require("cors")


const dataservice = require("./service/data.service");

// creating server app
const app = express();
app.use(cors({
  origin:"http://localhost:3001"
 }))


 

// to parse json to js
app.use(express.json());


// const appMiddleware = (req, res, next) => {
//   try {
//     console.log("middle")
//     token = req.headers["x-access-token"];
//     console.log(token)
//     result = jwt.verify(token, "secretsuperkey1234");
//     req.usid=result.currentusid
//     req.currentAcno=result.currentAcno
//     console.log(result+"ja");
// console.log(req.usid)
// console.log(result.currentusid)
//     next();
//   } catch {
//     res.status(400).json({
//       status: false,
//       message: "invalid user....please login",
//       statusCode: 400,
//     });
//   }
// };
  
 
const appMiddleware = (req, res, next) => {
  try {
    console.log("middle");
    // const token = req.headers['authorization'].split(' ')[1]; // Assuming the token is sent as "Bearer <token>"
    // const result = jwt.verify(token, "secretsuperkey1234");
    // req.currentUser = result.currentUser; 
    // console.log(currentUser+"cusoon")
    const authHeader = req.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new Error("Authorization header missing or invalid");
    }

    const token = authHeader.split(" ")[1];
    // console.log(token);
    // console.log(token+"takan anu mone");
    const result = jwt.verify(token, "secretsuperkey1234");


    req.usname = result.currentUser;
    // console.log(req.usname+"manassilayo")
    // console.log(result);

    next();
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "invalid user....please login",
      statusCode: 400,
    });
  }
};












app.post("/register", (req, res) => {
    const result = dataservice.register(
 
      req.body.usname,
      req.body.email,
      req.body.pswd
      
    );
    // console.log(usid)
    
    result.then((resobj) => {
      res.status(resobj.statusCode).send(resobj);
    });
  });



  
// all-prodect

app.get('/all-prodect',(req,res)=>{

  dataservice.allProdect().then(
      (result)=>{
        // console.log(result)
          res.status(result.StatusCode).send(result)
      }

  )

})




// LOGIN API
app.post("/login", (req, res) => {
  const result = dataservice.login(req.body.email, req.body.pswd);
  // res.status(result.statusCode).json(result)
  result.then((resobj) => {
    res.status(resobj.statusCode).send(resobj);
  });
});




// ptodects adddddddddddddddddddddddddddddd

app.post('/api/products', async  (req, res) => {

const result = dataservice.addprodect(
 
  req.body.id,
  req.body.title,
  req.body.price,
  req.body.description,
  req.body.category,
  req.body.image,
  req.body.rating,
  
);


// console.log(usid)

result.then((resobj) => {
  res.status(resobj.statusCode).send(resobj);
});
});





// get prodect cart api
// app.get
// ('/get-prodect/:id',appMiddleware,(req,res)=>{
//   console.log(req.params.id)
//   console.log(req.headers['authorization'])
//   dataservice.getProduct(req.params.id,req.headers['authorization']).
//   then((result)=>{
//       res.status(result.statusCode).send(result)
//   })
// })
app.get('/get-product/:id',appMiddleware,(req, res) => {
  // console.log(req.params.id);
  // console.log(req.usname+"orginal");
  dataservice.getProduct(req.params.id,req)
    .then((result) => {
      res.status(result.statusCode).send(result);
    })
    .catch((error) => {
      res.status(500).json({ message: "Error occurred while fetching product", error: error.message });
    });
});




// getcart
app.get("/getcart",appMiddleware, (req, res) => {
  const result = dataservice.getcart(req);
console.log(req.body.usname+"123456789-09876543456789")
  // res.status(result.statusCode).json(result);
  result.then(resobj=>{
    // console.log(resobj)
    res.status(resobj.statusCode).send(resobj)
  })
});


// app.delete("/removeFromCart/:username/:productId", appMiddleware, async (req, res) => {
//   const username = req.params.username;
//   const productId = req.params.productId;

//   const result = await dataservice.removeFromCart(username, productId);
//   console.log(username)

//   result.then(resobj => {
//     res.status(resobj.statusCode).send(resobj);
//   });
// });

app.delete("/removeFromCart/:username/:productId",appMiddleware, async (req, res) => {
  const username = req.params.username;
  const productId = req.params.productId;

  const result = await dataservice.removeFromCart(username, productId);
  console.log(username);

  res.status(result.statusCode).send(result); // Sending the result directly
});






  1// configuring port number for server app
  app.listen(3000, () => {
    console.log("server running on port 3000");
  });
  