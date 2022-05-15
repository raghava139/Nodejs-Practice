var crypto=require('crypto-js')
var data='this is my data String'
var key='password@123'

//encrypted
var MainEncrypt=crypto.AES.encrypt(data,key).toString()
console.log(`encrypted data:`,MainEncrypt)


//decrypted
var MainDecrypt=crypto.AES.decrypt(MainEncrypt,key).toString(crypto.enc.Utf8)
console.log(`decrypted data:`,MainDecrypt)