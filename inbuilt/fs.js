let fs = require('fs');

fs.writeFile('mycode.txt','This is my data of node',(err)=>{
  if(err) throw err;
  console.log('Task completed');
})

fs.appendFile('mycode.txt','This is my data of node\n',(err)=>{
  if(err) throw err;
  console.log('Task completed');
});

let data = fs.readFileSync('mycode.txt','utf-8');
console.log(data);

fs.readFile('mycode.txt','utf-8',(err,data)=>{
  if(err) throw err;
  console.log(data);  
});

data = fs.readFileSync('mycode.txt',{encoding:'utf-8',flag:'r'});
console.log(data);

fs.unlink('mycode.txt',(err)=>{
  if(err) throw err; 
  console.log('File deleted');
});

fs.rename('mycode.txt','mycode1.txt',(err)=>{
  if(err) throw err;
  console.log('File renamed');
});
















