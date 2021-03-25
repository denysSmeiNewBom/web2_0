const {Train} = require("./train");
const {Passenger} = require("./passenger");

function Database() {
    this.passengersArray = [];
    this.trainsArray = [];
}

// a.
Database.prototype.addPassenger = function (passenger) {
    if (!passenger || !(passenger instanceof Passenger)) {
        console.log("Invalid passenger!");
        return;
    }
    addObjectToArray(passenger, this.passengersArray);
    console.log("Passenger was added successfully");
}

// b.
Database.prototype.changePassenger = function(passenger, newPassenger) {
    if (!passenger || !(passenger instanceof Passenger)) {
        console.log("Invalid passenger!");
        return;
    }
    let id = passenger.id;
    this.deletePassengerById(id);
    console.log(this.passengersArray)
    this.addPassenger(newPassenger);
}

// c.
Database.prototype.deletePassengerById = function (id) {
    if (typeof id !== "number" || id <= 0) {
        console.log("Invalid id!");
        return;
    }

    const deletedPassenger = deleteFromArrayById(id, this.passengersArray);

    if (deletedPassenger) {
        console.log(deletedPassenger);
    } else {
        console.log("No passenger with such id!");
    }
}
// d.
Database.prototype.findPassengerById = function (id) {
    if (typeof id !== "number" || id <= 0) {
        console.log("Invalid id!");
        return;
    }
    const foundPassenger = findFromArrayById(id, this.passengersArray)

    if (!foundPassenger) {
        console.log("No passenger with such id!");
    } else {
        console.log(foundPassenger);
    }
}
// e.
Database.prototype.addTrain = function (train) {
    if (!train || !(train instanceof Train)) {
        console.log("Invalid train!");
        return;
    }

    addObjectToArray(train, this.trainsArray);
    console.log("Train was added successfully");
}
// f.
Database.prototype.changeTrain = function(train, newTrain) {
    if (!train || !(train instanceof Train)) {
        console.log("Invalid train!");
        return;
    }
    let id = train.id;
    this.deleteTrainById(id);
    console.log(this.trainsArray);
    this.addTrain(newTrain);
}

// g.
Database.prototype.deleteTrainById = function (id) {
    if (typeof id !== "number" || id <= 0) {
        console.log("Invalid id!");
        return;
    }

    const deletedTrain = deleteFromArrayById(id, this.trainsArray);

    if (deletedTrain) {
        console.log(deletedTrain);
    } else {
        console.log("No train with such id!");
    }
}
// h.
Database.prototype.findTrainById = function (id) {
    if (typeof id !== "number" || id <= 0) {
        console.log("Invalid id!");
        return;
    }
    const foundTrain = findFromArrayById(id, this.trainsArray)

    if (!foundTrain) {
        console.log("No train with such id!");
    } else {
        console.log(foundTrain);
    }
}
// l.
Database.prototype.findMostAndLeastSoldOutTrain = function () {
    let trainsCopyArray = Array.from(this.trainsArray);
    trainsCopyArray.sort((a, b) => {
        return a.soldTickets.soldTicketsArray.length - b.soldTickets.soldTicketsArray.length;
    })
    console.log(trainsCopyArray.length);
    console.log("Winner: " + trainsCopyArray[trainsCopyArray.length - 1].id + " sold tickets:" + trainsCopyArray[trainsCopyArray.length - 1].soldTickets.soldTicketsArray.length
        + "\nLoser: " + trainsCopyArray[0].id + " sold tickets:" + trainsCopyArray[0].soldTickets.soldTicketsArray.length);
}

// help functions
function addObjectToArray(object, array) {
    let found = array.find(value => value.id === object.id);
    if (found)
        array[array.indexOf(object)] = object;
    else
        array.push(object);
}

function deleteFromArrayById(id, array) {
    const objectToDelete = array.find(value => value.id === id);

    if (objectToDelete) {
        array.splice(array.indexOf(objectToDelete), 1);
    }

    return objectToDelete;
}

function findFromArrayById(id, array) {
    return array.find(value => value.id === id);
}


module.exports = {
    Database,
}