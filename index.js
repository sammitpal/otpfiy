const alpha = "abcdefghijklmopqrstuvwxyz";
const number = "0123456789"

function generateOTP(isAlphaNumeric,length){

    const alphaarr = alpha.split('');
    const numberarr = number.split('');

    let s=""
    while(length!=0){

        if(isAlphaNumeric){
            s=s+alphaarr[Math.floor(Math.random()*9)]    
            length--;
        }
        s=s+numberarr[Math.floor(Math.random()*9)]
        length--;
    }
    return s.toUpperCase()
}

module.exports = {
    generateOTP
}