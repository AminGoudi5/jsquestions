typeof '' = string
typeof 'hadi' = string 
typeof 'true' = string
typeof true = boolean 
typeof function () {} = function
typeof (() => {}) = function
typeof 10 = number 
typeof undefined = undefined
typeof null      object
typeof typeof null = string
typeof typeof 'anything' = string 
typeof { name: 'hadi' } = object
typeof NaN =  number   
typeof new Date() = object
typeof new BigInt('100000000000000000') = 'bigint'
typeof class foo {} = function
typeof Math = object


Boolean(undefined) = F
Boolean(null) = F
Boolean(false) = F
Boolean(10) = T
Boolean(-1) = T
Boolean(+0) = F
Boolean(-0) = F
Boolean(0) = F
Boolean(NaN) = F
Boolean('') = F
Boolean('hadi') = T
Boolean(function () {}) = T
Boolean({ name: 'hadi' }) = T


Number(undefined) = NaN
Number(null) = 0
Number(false) = 0
Number(true) = 1
Number(10) = 10
Number(+0) = 0
Number(-0) = -0
Number('') = 0
Number('hadi') = NaN
Number('true') = NaN
Number(NaN) = NaN
Number(function () {}) = NaN
Number({ name: 'hadi' }) = NaN


String(null) = 'Null'
String(undefined) = 'undifind'   
String(false) = 'false'
String(true) = 'true'
String(10) = '10'
String(NaN) = 'NaN'
String(function() {}) = 'function() {}'
String({ name: 'hadi' }) = '[object Object]'
String(new Date()) = 'Sun Aug 06 2023 09:54:11 GMT+0330 (Iran Standard Time)'
String(BigInt(10000000000000000000000000000000000))  =  '9999999999999999455752309870428160'


10 + 2  = 12
10 + '2' = '102'
10 + '2' + 10 = '10210'
10 + 10 + '2' = '202'
10 + '' = '10'
null + '' = 'null'
undefined + '' = 'undefined'
null + undefined = NaN
undefined + undefined =NaN
null + null = 0
true + 10 = 11
false + 11 = 11