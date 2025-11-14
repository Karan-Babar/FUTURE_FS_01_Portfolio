const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const contactInput = document.querySelector('input[name="contact"]');

submitBtn.addEventListener('click', (e) => {
    if (contactInput.value.length !== 10 || isNaN(contactInput.value)) {
        alert("Contact number must be exactly 10 digits!");
        return;
    }

});


mongoose.connect("mongodb://127.0.0.1:27017/portfolioContact", {
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    contact: String,
    message: String,
    date: { type: Date, default: Date.now }
});

const Message = mongoose.model("Message", messageSchema);

app.post("/contact", async (req, res) => {
       console.log("Received Data:", req.body);

    try {
        const newMessage = new Message(req.body);
        await newMessage.save();
        res.status(200).send("Message Saved Successfully");
    } catch (error) {
        res.status(500).send("Error saving message");
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
