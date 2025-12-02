const express = require('express');
const data = require('./data.js')
const server = express()
const fs = require("fs");

server.use(express.json());  
server.use(express.urlencoded({ extended: true })); 


server.get('/', (req, res) => {
  res.send('Hello World ')
})

server.get('/users', (req, res) => {
    res.status(200).json(data)
});


server.get('/users/:id', (req,res) => {


   try {

       const { id } = req.params;

   const user = data.find(u => u.id === parseInt(id));
   
   if(user) {
    res.status(200).json(user)
   } else {
    res.status(404).send('cant find a user');
   }

   } catch(err) {
    console.error("GET /users error:", err);
    return res.status(500).json({ message: "An error occurred while acquiring a user", error: err.message });
   }

});


server.post('/users', (req,res) => {

 try {
        const { name, email } = req.body;

    if(!name || !email) {
        return res.status(400).json({message: "Name and email are required"});
    }

    let newId = 1;

    if(data.length > 0) {
        newId = data[data.length - 1].id + 1;
    }


    const newUser = {
        id: newId,
        name:name,
        email:email
    };

    data.push(newUser);

    return res.status(201).json(newUser);
 } catch(err) {
    console.error("POST /users error:", err);
    return res.status(500).json({ message: "An error occurred while adding a user.", error: err.message });
 }

});


server.put('/users/:id', (req,res) => {


  try {
          const userID = parseInt(req.params.id);
  
      const { name, email } = req.body;
      if(!name || !email) {
        return res.status(400).json({message: "Name and email are required"});
      }


    const userIndex = data.findIndex(u => u.id === userID);
  


    if(userIndex === -1) {
      return  res.status(404).json({message: "user not found"});
    }

  
     data[userIndex].name = name;
     data[userIndex].email = email;



    fs.writeFileSync("./data.js", "module.exports = " + JSON.stringify(data, null, 2));
   
   

    return res.status(200).json(data[userIndex]);
  } catch(err) {
    console.error("PUT /users error:", err);
    return res.status(500).json({ message: "An error occurred while update a user.", error: err.message });
  }
    

});

server.delete('/users/:id', (req,res) => {

  try {
        const userID = parseInt(req.params.id);

    const userIndex = data.findIndex(u => u.id === userID);

    if(userIndex === -1){

      return res.status(404).json({message: " user not found"});
    }

    const deletedUser = data.splice(userIndex, 1)[0];
    
    fs.writeFileSync("./data.js", "module.exports = " + JSON.stringify(data, null, 2));

    return res.status(200).json(deletedUser);
  } catch(err) {
    console.error("DELETE /users error:", err);
    return res.status(500).json({ message: "An error occurred while delete a user.", error: err.message });
  }

});





const port = 3000;

server.listen(port, (req,res) => {
    console.log(`server is running ${port}`);
    
});