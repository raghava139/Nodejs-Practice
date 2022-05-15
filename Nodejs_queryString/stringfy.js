querystring=require('querystring')

//stringify method is taking json and converted in to query String.
const qs=querystring.stringify({name:'raghava',brand:'lenovo',ram:'2GB'})
console.log(qs)