const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8006;
app.use(bodyParser.json());
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);
const pdfMailer = require("./routes/PdfMailer");
const connectDB = require("./config/ConnectDB");

app.use("/pdf-mailer", pdfMailer);

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log("db connection sucess !");
  } catch (err) {
    console.log("getting error", err);
  }
});
