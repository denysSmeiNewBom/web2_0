const {Passenger} = require("./passenger");
const {Ticket} = require("./ticket");
const {SoldTickets} = require("./soldTickets");

function Train(id, route) {
    this.id = id;
    this.route = route;
    this.soldTickets = new SoldTickets();
}

// i.
Train.prototype.sellTicket = function (passenger) {
    if (!passenger || !(passenger instanceof Passenger)) {
        console.log("Invalid passenger!");
        return;
    }

    const ticketToSell = new Ticket(passenger, this);
    this.soldTickets.addTicket(ticketToSell);
    return ticketToSell;
    console.log(ticketToSell);
}

// j.
Train.prototype.changeTicket = function (ticket, newTrain) {
    if (!ticket || !(ticket instanceof Ticket)) {
        console.log("Invalid ticket!");
        return;
    }

    if (!newTrain || !(newTrain instanceof Train)) {
        console.log("Invalid train!");
        return;
    }

    if (!this.soldTickets.soldTicketsArray.includes(ticket)) {
        console("Ticket have not been sold for this train!");
        return;
    }

    this.removeTicket(ticket);
    ticket.train = newTrain;
    newTrain.soldTickets.soldTicketsArray.push(ticket);
    console.log(ticket);
}

Train.prototype.removeTicket = function (ticket) {
    this.soldTickets.soldTicketsArray
        .splice(this.soldTickets.soldTicketsArray.indexOf(ticket), 1);
    ticket.train = undefined;
}


module.exports = {
    Train,
}
