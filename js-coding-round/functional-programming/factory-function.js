/*
 Factory Function is a function that produces another function.
 So that's the idea behind factory functions:
 if you have a certain function which you call multiple times in different parts of your app and
 it can be preconfigured in a certain way so that calling it is easier and you don't need to repeat 
 yourself as often because our second argument would always be the same here if we would expect 
 two arguments as we have done below, in such a case, a factory function can be convenient and
 can save you time and code.
 */

 function createTaxCalculator(tax) {
     function calculateTax(amount) {
         return amount * tax;
     }
     return calculateTax;
 }

 const calculateVatAmount = createTaxCalculator(0.19);
 const calculateIncomeTaxAmount = createTaxCalculator(0.25);