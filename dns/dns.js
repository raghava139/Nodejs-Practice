//dns.getServers()
const dns=require('dns')
// console.log(dns.getServers())

// //dns.setServers()
// const {Resolver}=require('dns')
// const resolver=new Resolver()

// resolver.setServers([`244.3.3.5`])
// console.log(resolver.getServers())


// dns.lookUp(hostname,options(family,hint,all,verbatim),callback)

//set options
const options={
    family:6,
    hints: dns.ADDRCONFIG | dns.V4MAPPED,
}
//hostname,options,callback
dns.lookup('eArbor.com',options,(err,address,family)=>{
    console.log(`address:${address} family: ${family}`)
})

// const options = {
      
//     // Setting family as 6 i.e. IPv6
//     family: 6,
//     hints: dns.ADDRCONFIG | dns.V4MAPPED,
// };
  
// // Calling dns.lookup() for hostname geeksforgeeks.org
// // and displaying them in console as a callback
// dns.lookup('geeksforgeeks.org', options, (err, address, family) =>
//         console.log(address, family));