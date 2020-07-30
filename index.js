var app = require("express")();
var server = require("http").Server(app);
var io = require("socket.io")(server);
var cors = require("cors");
var bodyparser = require("body-parser");
var Sendmailto=require('./Controllers/Mailer/mail')
var cron=require('node-cron')
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
server.listen(8081, console.log("Node Started"));
app.use("/user", require("./Router/Accountroutes"));
app.use("/patient", require("./Router/Patientform"));
app.use("/view", require("./Router/Roominforoute"));
app.use("/add", require("./Router/medicationroutes"));
app.use("/give", require("./Router/givetreatment"));
cron.schedule('* 21 * * *',function()
{
console.log("Running Cron job")
Sendmailto.Sendmail() 
})
let socket = [],
  flag;
let { prisma } = require("./generated/prisma-client");
var y = io.of("sujith").on("connection", async function(socket) {
  console.log("Connection sujith");

  socket.on("emergency", function(result) {
    // console.log(result)
    // socket.emit('notification',{
    //   data:`Patient ${result.patientname} is in emergency and remaining time is ${result.time}`
    // })
  });
  socket.on("addpatients", async function(res) {
    console.log("sujith");
    const roomavailable = await prisma.roominfoes();
    const roomallocates = await prisma
      .roomallocates({})
      .$fragment(
        "fragment addres on roominfo{ id Personid{id Patientname }Roomid{id Status}Patientstatus,createdAt}"
      );
    //  console.log(roomavailable)
    socket.broadcast.emit("demodata", {
      data: roomavailable,
      roomallocated: roomallocates,
      flag: true
    });
  });
  socket.on("demo", async function() {
    const roomavailable = await prisma.roominfoes();
    const roomallocates = await prisma
      .roomallocates({})
      .$fragment(
        "fragment addres on roominfo{ id Personid{id Patientname }Roomid{id Status}Patientstatus,createdAt}"
      );
    socket.emit("demodata", {
      data: roomavailable,
      roomallocated: roomallocates
    });
  });
});
socket.push(y);




