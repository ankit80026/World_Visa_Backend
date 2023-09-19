const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8005;
app.use(bodyParser.json());
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
