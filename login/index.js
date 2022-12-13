const admin = require('firebase-admin');

// import service account file (helps to know the firebase project details)
const serviceAccount = require("../serviceAccountKey.json");

// Intialize the firebase-admin project/account
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


module.exports = async function (context, req) {


    const token = ((req.body && req.body.token));
    var responseMessage ="";
    var status=200;
    if(token){
 await admin.auth().verifyIdToken(token)
.then((decodedToken) => {
    debugger;
  const uid = decodedToken.uid;
  responseMessage="Token verfied";
  console.log("2","yes")
  


  // ...
})
.catch((error) => {
    debugger;
    responseMessage="Token unverfied";
    status=401;
    console.log("first","no")

});
context.res = {
    status:status, 
    body: responseMessage
};
console.log(context.res)
    }
       

 
    
}





