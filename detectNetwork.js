// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefixCheck)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  var validatePrefix = function(input){ return cardNumber.startsWith(input)}
  var len = cardNumber.length
  // var validatePrefix = cardNumber.substring(0,1);

  if (len === 15 && (validatePrefix('34') || validatePrefix('37'))){ return 'American Express'}
  else if (len === 14 && (validatePrefix('38')|| validatePrefix('39'))){ return 'Diner\'s Club' }
  else if ((len === 13 || len === 16 || len === 19) && ( validatePrefix('4'))){ return 'Visa'}
  else if (len === 16 && (validatePrefix('51') || validatePrefix('52') || validatePrefix('53') || validatePrefix('54') || validatePrefix('55'))){ return 'MasterCard'}
  else if ((len === 16 || len === 19) && (validatePrefix('6011') || validatePrefix('644') || validatePrefix('645')
      || validatePrefix('646') || validatePrefix('647') || validatePrefix('648') || validatePrefix('649') || validatePrefix('65') )){
      return 'Discover'}
  else if((len >=12 && len <= 19) && (validatePrefix('5018') || validatePrefix('5020') || validatePrefix('5038') || validatePrefix('6304')) ){
      return 'Maestro'}
      // 622126 - 622925
  else if((len >= 16 && len <= 19) && (validatePrefix('622' + validateNext(126, 925))) || validatePrefix((validateNext(624, 626))) || validatePrefix((validateNext((6282, 6288)))) ){
      return "China UnionPay"
  }
  else if((len === 16 || len === 18 || len === 19) && (validatePrefix('4903') || validatePrefix('4905') || validatePrefix('4911') || validatePrefix('4936') || validatePrefix('564182') || validatePrefix('633110')
          || validatePrefix('6333') || validatePrefix('6759') ) ){
      return 'Switch'
  }

};

function validateNext(low, high){
    var res = ''
    for(var i = low; i <= low; i++){
        res += i
    }
    return res
}
console.log(detectNetwork('3934567890123 '))
console.log(detectNetwork('38345678901234'))
console.log(detectNetwork('3834567890123 '))
console.log(detectNetwork('39345678901234'))
console.log(detectNetwork('373456789012345'))
console.log(detectNetwork('343456789012345'))
console.log(detectNetwork('4123456789012'))
console.log(detectNetwork('4123456789012345'))
console.log(detectNetwork('4123456789012345678'))
console.log(detectNetwork('5112345678901234'))
console.log(detectNetwork('5212345678901234'))
console.log(detectNetwork('5312345678901234'))
console.log(detectNetwork('5412345678901234'))
console.log(detectNetwork('5512345678901234'))
console.log(detectNetwork('6011111111111111111'))

for(var i = 644; i <= 649; i++){
    console.log(detectNetwork( 644 + '1111111111111'))
    console.log(detectNetwork( 644 + '1111111111111111'))
};

