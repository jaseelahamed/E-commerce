// importing jwt package
const jwt = require("jsonwebtoken");

const db = require("./db");

const register = (usname, email, pswd) => {
  return db.RRR.findOne({
    email: email,
  }).then((acc) => {
    // console.log(acc);
    if (acc) {
      return {
        status: false,
        message: "Account Already exists!!......please login",
        statusCode: 404,
      };
    } else {
      let accr = new db.RRR({
     
        usname: usname,
        email:email,
        password: pswd,
        cart: [],
      });
      accr.save();
      return {
        status: true,
        message: "Registration completed!!",
        statusCode: 201,
      };
    }
  });
};


const login = (email, pswd) => {
  return db.RRR.findOne({
    email: email,
    password: pswd,
  }).then((res) => {
    // console.log(res + "from login in ds");
    if (res) {
      currentUser = res.usname;
      currentpswd = pswd;
      token = jwt.sign(
        //acno of current user
        { currentUser: res.usname },
        "secretsuperkey1234"
      );
        // console.log(currentUser+"gh")
      return {
        status: true,
        message: "Login successfull",
        statusCode: 200,
        currentUser,
        // currentusid,
        token,
      };
    } else {
      return {
        status: false,
        message: "invalid password or account number",
        statusCode: 400,
      };
    }
  });
};

// add prodect



const addprodect = (id,title,price,description,category,image,rating) => {
  return db.Products.findOne({
    id:id
  }).then((acc) => {
    // console.log(acc);
    if (acc) {
      return {
        status: false,
        message: "Account Already exists!!......please login",
        statusCode: 404,
      };
    } else {
      let accr = new db.Products({
     
        id,
        title,
        price,
        description,
        category,
        image,
        rating
      });
      accr.save();
      return {
        status: true,
        message: "Registration completed!!",
        statusCode: 201,
      };
    }
  });
};



// get all prodect
const allProdect=()=>{
  return db.Products.find().then(
      (result)=>{
      //  console.log(result+"hai")
            if(result){
                return {
                    StatusCode:200,
                    Prodect:result
                }
            }
            else{
                return{
                StatusCode:404,
                message:'NO data Available'
                }
            }
        }
    )
}


// get employee
// const allEmployees=()=>{
//     return db.Emplooye.find().then(
//         (result)=>{
//             console.log(result+"hai")
//             if(result){
//                 return {
//                     StatusCode:200,
//                     employee:result
//                 }
//             }
//             else{
//                 return{
//                 StatusCode:404,
//                 message:'NO data Available'
//                 }
//             }
//         }
//     )
// }




// const getProduct=(id)=>{
  // console.log
//   return db.Products.findOne({
//       id:id
     
//   }).then((result)=>{
//     console.log(result)
//       if(result){
//           return{
//               statusCode:200,
//               id:result
//           }
//       }
//       else{
//           return{
//               statusCode:404,
//               message:"Invalid Employee ID !!"
//           }
//       }
//   })
// }

const getProduct = (id, req) => {
  return db.Products.findOne({
    id: id
  })
    .then((result) => {
      if (result) {
        return db.RRR.findOne({
          usname: req.usname,
        }).then((rrrDocument) => {
          if (!rrrDocument) {
            rrrDocument = new db.RRR();
          }

          // Check if the product already exists in the cart
          const existingProductIndex = rrrDocument.cart.findIndex(
            (item) => item.id === result.id
          );

          if (existingProductIndex !== -1) {
            // If the product already exists, increment its quantity
            rrrDocument.cart[existingProductIndex].quantity += 1;
          } else {
            // If the product doesn't exist, add it to the cart
            rrrDocument.cart.push({
              // id: result.id,
              // name: result.name,
              // price: result.price,
              // image: result.image,
              id: result.id,
              title: result.title,
              price: result.price,
              quantity: 1,
              image: result.image,
           
              // other product properties...
            });
          }

          // Save the updated RRR document
          return rrrDocument
            .save()
            .then(() => {
              return {
                status: true,
                message: "Product added to cart successfully",
                statusCode: 200,
              };
            })
            .catch((err) => {
              return {
                status: false,
                message: "Failed to save the cart",
                statusCode: 500,
              };
            });
        });
      } else {
        return {
          statusCode: 404,
          message: "Product not found",
        };
      }
    })
    .catch((err) => {
      return {
        status: false,
        message: "Error occurred while fetching products",
        statusCode: 500,
      };
    });
};


// getcart
const getcart= (req)=>{
  // console.log(currentusid)
  return db.RRR.findOne({
    usname: req.usname
  }).then(res=>{
    // console.log(res)
    if(res){
      return{
        status:true,
        message:"success",
        data:res.cart,
        statusCode:200
      }
    }
    else{
      return{
        status:false,
        message:"failed",
        data:res.reminder,
        statusCode:422
       
      }
    }
  })
}

// const Deletcart = async (username, productId) => {
//   try {
//     const rrrDocument = await db.RRR.findOne({ usname: username });

//     if (!rrrDocument) {
//       return {
//         status: 404,
//         message: 'RRR document not found for the user',
//         statusCode: 404
//       };
//     }

//     const updatedCart = rrrDocument.cart.filter(product => product._id.toString() !== productId);

//     if (updatedCart.length < rrrDocument.cart.length) {
//       rrrDocument.cart = updatedCart;
//       await rrrDocument.save();
//       return {
//         status: 200,
//         message: 'Product removed from cart successfully',
//         statusCode: 200
//       };
//     } else {
//       return {
//         status: 404,
//         message: 'Product not found in the cart',
//         statusCode: 404
//       };
//     }
//   } catch (error) {
//     console.error(error);
//     return {
//       status: 500,
//       message: 'An error occurred while removing the product from the cart',
//       statusCode: 500
//     };
//   }
// };
const removeFromCart = async (username, productId) => {
  try {
    const rrrDocument = await db.RRR.findOne({ usname: username });

    if (!rrrDocument) {
      return {
        status: false,
        message: "RRR document not found for the user",
        statusCode: 404
      };
    }
console.log(rrrDocument.cart)
    rrrDocument.cart = rrrDocument.cart.filter(product => product.id.toString() !== productId);

    await rrrDocument.save();

    return {
      status: true,
      message: "Product removed from cart successfully",
      statusCode: 200
    };
  } catch (error) {
    console.error("Error while removing product from cart:", error);
    return {
      status: false,
      message: "An error occurred while removing the product from the cart",
      statusCode: 500
    };
  }
};


module.exports = {
    register,
    login,
    addprodect,
    allProdect,
    getProduct,
    getcart,
    removeFromCart
  };
  