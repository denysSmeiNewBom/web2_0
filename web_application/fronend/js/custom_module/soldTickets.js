function SoldTickets() {
    this.soldTicketsArray = [];
}

SoldTickets.prototype.addTicket = function (ticket) {
    this.soldTicketsArray.push(ticket);
}

module.exports = {
    SoldTickets,
}