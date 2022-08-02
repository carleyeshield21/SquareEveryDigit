// This is the link to this JavaScript Function
// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
function squareDigits(num){
    let numstr = num.toString()
    let numarr = []
    for(i=0; i<=numstr.length-1; i++){
        numarr.push(parseInt(numstr[i])**2)
    }
    console.log(num)
    console.log(numarr.join(''))
}
squareDigits(9119)
console.log('========')
squareDigits(3212)
console.log('========')
squareDigits(2112)