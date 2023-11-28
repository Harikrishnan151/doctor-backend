//import json server
const jsonServer=require('json-server')

//create a server
 const server=jsonServer.create()

 // setup path for db.json file
 const router=jsonServer.router('db.json')

 //return middleware used by json
  const middleware=jsonServer.defaults()

//setup port for server
 const port=process.env.port || 3001

 //use middleware and router
 server.use(middleware)
 server.use(router)

//run server
server.listen(port,()=>{
    console.log('listing on port '+port);
})