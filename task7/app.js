const {Train} = require("./train");
const {Passenger} = require("./passenger");
const {Database} = require("./database");

const db = new Database();

const passengers = [new Passenger(1, "Ihor"), new Passenger(2, "Vlad"), new Passenger(3, "Dmitro"), new Passenger(4, "Max")];
const trains = [new Train(707, "Lviv-Kyiv"), new Train(131, "Lviv-Odesa"), new Train(999, "Lviv-Ternopil")];


// a.
console.log("a.")
passengers.forEach(value => db.addPassenger(value));


// b.
console.log("b.")
db.changePassenger(passengers[2], new Passenger(3, "Dmytro"));

// c.
console.log("c.")
db.deletePassengerById(4);

// d.
console.log("d.")
db.findPassengerById(1);
db.findPassengerById(8);


// e.
console.log("e.")
trains.forEach(value =>  db.addTrain(value));


// f.
console.log("f.")
db.changeTrain(trains[2], new Train(888, "Lviv-Chernivtsi"));

// g.
console.log("g.")
db.deleteTrainById(888);


// h.
console.log("h.")
db.findTrainById(131);
db.findTrainById(999);

// i.
trains[0].sellTicket(passengers[0]);
trains[0].sellTicket(passengers[1]);
let ticket = trains[1].sellTicket(passengers[2]);
trains[1].sellTicket(passengers[3]);
trains[1].sellTicket(passengers[0])


// j.
console.log("j.")
trains[0].changeTicket(trains[0].soldTickets.soldTicketsArray[0], trains[1]);

// k.
console.log("k.")
ticket.cancelOrder()

// l.
console.log("l.")
db.findMostAndLeastSoldOutTrain()

