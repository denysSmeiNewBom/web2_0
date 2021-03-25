function Ticket(passenger, train) {
    this.passenger = passenger;
    this.train = train;
}
// k.
Ticket.prototype.cancelOrder = function () {
    this.train.removeTicket(this);
}

module.exports = {
    Ticket,
}

module.exports = {
    Ticket,
}