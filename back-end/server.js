let express = require("express");
let server = express();
let collectionRef = null;
let { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://BerinHadziabdic:aFlK0cKoPRP2RYgG@cluster0-dzpnn.mongodb.net/<devsite>?retryWrites=true&w=majority";
let path = require("path");

const port = process.env.port || 8080;

server.use(express.json());

function saveBody(body) {
  MongoClient.connect(uri, function (err, dbObj) {
    if (err === null)
      dbObj
        .db("devsite")
        .collection("messages")
        .insert({ email: body.email, msg: body.msg }, function (
          insertionErr,
          result
        ) {
          if (insertionErr === null) {
            console.log(`Insertion Err Value: ${err}`);
            console.log(result);
          } else console.log("There was an error.");
        });
  });
}

function validateBody(body) {
  let notFalsyBody = body !== null && body !== undefined;
  let emailMsg = notFalsyBody ? body.email && body.msg : false;
  let typeCheck =
    typeof body === "object" &&
    typeof body.email === "string" &&
    typeof body.msg === "string";

  return body;
}

function sanitizeUserInput(body) {
  let badInput = /[><="'\${:\/}\[\]]/;
  let returnBody = {};
  returnBody.email = body.email.replace(badInput, " ");
  returnBody.msg = body.msg.replace(badInput, " ");

  return returnBody;
}

server.post("/xl1p1-z?", (req, res) => {
  let { body } = req.body;

  if (validateBody(body)) {
    let sanitizedInput = sanitizeUserInput(body);
  } else {
    res.status(400).end();
  }
});

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});
server.listen(port, console.log("Listening"));
