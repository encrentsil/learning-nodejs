import { createServer } from 'node:http';
import {unlink} from 'node:fs';
//Define request handler

//Create HTTP Server
const server = createServer((req, res) => {
    console.log(req.url);
    if (req.url.includes('create')) {
        //Create File
        writeFile('./fiifi.html', '<h1>Learning Node.js</h1>', () => {
            //Return response
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>File added</h1>');
        });
    } else {
        //Delete file    
        unlink('', () => {
            //Return response
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>File deleted</h1>');
        });
    }

});




    // Listen for incoming request
    server.listen(3000, '127.0.0.1', () => {
        console.log('Server is running');
    });

    //Normal function vs Arrow function 
    const handleRequest = () => { } 