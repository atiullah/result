
const mongoose = require('mongoose');
mongoose
    .connect("mongodb://localhost/Developer", { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));
