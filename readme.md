# OTPfiy 🔐

### One Time Password generator for different applications

## **Intallation**

    npm i otpfiy

## About OTPfiy

Generate otp with generateOTP function.

generateOTP function takes in two parameters.

    generateOTP(false,6)
    generateOTP(true,6)

1st parameter is of boolean type which is alphanumeric
If false it will only generate numeric characters.

2nd paramerter is the length of the OTP.

## How to use?

    const otpfiy = require('otpfiy')
    const otp1 = otpfiy.generateOTP(false,6)
    const otp2 = otpfiy.generateOTP(true,8)

    console.log(otp1) //returns 653734 
    console.log(otp2) //returns D7H7E3H7
