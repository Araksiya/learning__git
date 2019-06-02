var age = +prompt('Age','');

console.log(isNaN(age)  || age <= 0 ? 'Enter your age' :
           age >= 18 ? 'Welcome!' :
           age <= 12 ? 'Try another service' : 'get out' );
           
  ///////////////////////////////////////////////////////////
           var age = +prompt('Age','');
           if (age>=18) {
        console.log ('Welcome!');
       }
       else if (age < 12) {
         console.log ('Try another service');
        }
       else {
         console.log ('get out');
       } 
//////////////////////////////////////////////////////////////
var name = prompt ('What is your name?');
var age = +prompt('Enter your age');
console.log(age);
var experience = +prompt('What is your  experience?');
console.log(experience);

if ( age >= 30 && experience >= 3) {
  console.log( 'you accepted ' );
}
 else {
  console.log( 'sorry you are not accepted ' );
}
  
  /////////////////////////////////////////////////////

  var amount = +prompt('Enter amount of money');
  console.log(amount);
   var currency = prompt('UAH-USD or UAH-EUR', '');
    console.log(currency);
 
     if ( currency === 'UAH-USD' ) {
  console.log( 'You get ' + amount /26 + ' USD!' );
    }
    else {
    console.log( 'You get ' + amount /30 + ' EUR!' );
 }