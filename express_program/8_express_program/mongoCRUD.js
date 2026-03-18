const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/testdb')
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

// Schema
const UserSchema = new mongoose.Schema({
    name:String,
    age:Number
});

const User = mongoose.model("User",UserSchema);

// CREATE
app.post('/create', async (req,res)=>{
    const user = new User(req.body);
    await user.save();
    res.send("User created");
});

// READ
app.get('/read', async (req,res)=>{
    const users = await User.find();
    res.json(users);
});

// UPDATE
app.put('/update/:id', async (req,res)=>{
    await User.findByIdAndUpdate(req.params.id,req.body);
    res.send("User updated");
});

// DELETE
app.delete('/delete/:id', async (req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    res.send("User deleted");
});

app.listen(4000,()=>{
    console.log("Server running on http://localhost:4000");
});