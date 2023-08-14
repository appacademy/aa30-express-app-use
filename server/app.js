const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "API server is running" });
});

/**************************** PART 1 **********************************/
// Note: No changes need to be made to the code in Part 1

app.get("/get", (req, res) => {
  res.json({
    message: `req.url in a route handler connected by app.get() is ${req.url}`
  });
});

app.use("/use", (req, res) => {
  res.json({
    message: `req.url in a route handler connected by app.use() is ${req.url}`
  });
});

/**************************** PART 2 **********************************/

const blogResource = (req, res) => {
  res.json({
    message: `Blog Singleton Resource # ${req.params.id}`,
    urlSuffix: req.url
  });
};

// Your code here 

const PORT = 5000;
app.listen(PORT, () => console.log("Server is listening to port", PORT));