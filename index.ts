#! /usr/bin/env node

import inquirer from "inquirer";


const currencyRates:any={
    USD:1,
    EUR:0.91,
    GBP:8.76,
    CYN:7.24,
    INR:74.57,
    JPV:153,
    PKR:280,
}
let useranswers = await inquirer.prompt
(
 [
    {
        name:"from",
        type:"list",
        message:"Enter from currency",
        choices:["USD","EUR","GBP","CYN","INR","JPV","PKR"]
    },
    {
        name:"to",
        type:"list",
        message:"Enter to currency",
        choices:["USD","EUR","GBP","CYN","INR","JPV","PKR"]

    },
    {
        name:"amount",
        message:"Enter your amount",
        type:"number"
    }
 ]
);
let fromAmount = currencyRates[useranswers.from]
let toAmount = currencyRates[useranswers.to]
let amount = useranswers.amount
let baseAmount = amount/fromAmount
let convertedAmount = baseAmount * toAmount
console.log(`Your converted amount is ${convertedAmount}`)