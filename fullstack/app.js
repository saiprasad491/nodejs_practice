let express = require('express');
let app = express();  
let dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env file
let port = process.env.PORT || 6700;

app.get('/', (req, res) => {
    res.send('Hii from express');
});
app.get('/test', (req, res) => {
    res.send('Test route is working');
});

app.listen(port, (err) => {
  if(err) throw err;
  else
    console.log(`Server is running on port ${port}`);
}); // Start the server on port 6700


