const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;
    res.send("Answer is "+ result);
});
app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmicalculator.html");
});
app.post("/bmicalculator", function (req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var result = bmiCalculator(weight,height);
    res.send(result);
});

app.listen(port, function () {
  console.log("started");
});

function bmiCalculator (weight, height) {
    var bmi = Math.round(weight/(height*height));
    var interpretation;
    
    if(bmi < 18.5){
        interpretation = "Your BMI is "+bmi+", so you are underweight.";
        
    }
    if(bmi >= 18.5 && bmi < 24.9){
        interpretation = "Your BMI is "+bmi+", so you have a normal weight.";
        
    }
    if(bmi > 24.9){
        interpretation = "Your BMI is "+bmi+", so you are overweight.";
        
    }
    return interpretation;
}