
const http=require('http');
const port=3000;

const genenerateOPT= require('./user_otp');
//Create server
const server= http.createServer((req,res)=>{
    if(req.method=== 'GET' && req.url==='/api/user/otp'){
        const otp=genenerateOPT();
        res.end(`<h1>Your otp is: ${otp}</h1>`);
    } else{
        res.end(`<h1>page not found</h1>`);

    }
})


server.listen(port, () => {
  console.log('Server is running on http://localhost:3000');
});
