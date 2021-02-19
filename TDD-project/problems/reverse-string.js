const reverseStr = (str) => {
   if(typeof str !== 'string') {
       throw new TypeError('input provided must be string')
   } else {
       return str.split('').reverse().join('');
   }
}


console.log(reverseStr('potato'))

module.exports = reverseStr
