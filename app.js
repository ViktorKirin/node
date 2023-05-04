import path from 'path';
import os from 'os';
import fs from "fs";

const users = [
    { name: 'Mike', age: 25 },
    { name: 'Bob', age: 32 },
    { name: 'Nikola', age: 17 },
  ];


console.log('System: ' + os.platform());
console.log('Home directory: ' + os.homedir());
console.log('Time: ' + os.uptime());
console.log('Host name:' + os.hostname());

const filePath = path.join(os.homedir(), "data.json");

//https://nodejs.org/dist/latest-v18.x/docs/api/path.html

const newData = [
    {name: "Anna", age: 24},
    {name: "Tom", age: 52}
];


//https://www.geeksforgeeks.org/node-js-fs-writefile-method/

fs.writeFile(filePath, 'text',  (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully");
        }
      }
) 

// дальше не успел разобраться...