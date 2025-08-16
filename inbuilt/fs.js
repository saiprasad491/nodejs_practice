let fs = require('fs');

fs.writeFile('mycode.txt','This is my data of node',(err)=>{
  if(err) throw err;
  console.log('Task completed');
})
