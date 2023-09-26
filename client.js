const express = require('express');
const soap = require('soap');
const url = "http://localhost:3000/temperatureConverter?wsdl";
const args = {temperature:37};

soap.createClient(url,(err,client)=>{
    if(err) console.log(err);
    else{
        client.ConvertCelsiusToFahrenheit(args,(err,response)=>{
            if(err) console.log(err);
            else{
                console.log(response);
            }
        })
    }
})