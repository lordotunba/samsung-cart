import express from 'express';


const payload = require("./products.json");
const model = ["UN65KS9500FXZA","UN32J5205AFXZA","UN65KS9000FXZA"];
const productArr = [];
const app = express();


const returnProductArr = ()=>{
  for(let i= 0; i <= payload.length; ++i){
    if(payload[i] == undefined){
      break;
    }
    else if (model.indexOf(payload[i].model_number) > -1 && (productArr.length < 3)){
            productArr.push(payload[i]);
    }
  }
  return productArr;
}

app.use('/', express.static('public'));


app.get('/v1/search',function(req,res){
  res.send(model);
});


app.get('/v1/products',function(req,res){
res.send(returnProductArr());



});

app.listen(process.env.PORT || 3000);
