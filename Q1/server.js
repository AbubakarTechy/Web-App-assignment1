const http= require('http');
const port= 8080;
const host='192.168.1.19';

const server=http.createServer((req, res)=>{
    console.log(`Client requested`, req.url);
    if(req.url=='/'){
        const datTime=new Date().toLocaleString(); 
        res.end(`
            <h1>Student Information:</h1>
            <p><strong>Name:</strong>Abu bakar Rasheed</p>
            <p><strong>Roll No:</strong>L1F23BSSE0371</p>
            <p><strong>Date/Time:</strong>${datTime}</p>
            <p><strong>IP Adress:</strong>192.168.1.19</p>

        `);
    } else{
        res.end(`<h1>Page Not Found<h1>`);
    }
});

server.listen(port,()=>{
    console.log(`Server running on http://${host}:${port}`);
})