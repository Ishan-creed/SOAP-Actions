const soap = require('soap');
const express = require('express');
const app = express();

const service = {
    TemperatureConverterService:{
        TemperatureConverterPort:{
            
            ConvertCelsiusToFahrenheit(args){

                const fahrenheit = (((args.temperature)*(9/5)) + 32).toFixed(1);

                return {Temperature_In_Fahrenheitsr : `${fahrenheit} Farhenheits`};

            },
        },
    },
};

const xml = require("fs").readFileSync("./temperatureConverter.wsdl","utf-8");

const server = app.listen(3000,()=>{
    const host = "127.0.0.1";
    const port = server.address().port;
    console.log(`Server running at http://localhost:${port}/`);
});

soap.listen(server,"/temperatureConverter",service,xml);